import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GJNumbersView from "../../Components/GJNumbersView​";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import {
  PairValuesContext,
  BitstampValuesContext,
} from "../../store/pairsContext";

const useStyles = makeStyles({
  averageContainer: {
   
  },
});

/**
 *  Average ticker container (column 1)
 *
 * Container component with api calls
 *
 *  */

const AverageTicker = () => {
  //const [bitstampValue, setbitstampValue] = useState(undefined);
  const [coinbaseValue, setCoinbaseValue] = useState();
  const [bitfinexValue, setBitfinexValue] = useState();
  const [averageValue, setAverageValue] = useState("");
  const styles = useStyles();

  const { pairValue } = useContext(PairValuesContext);
  const { bitstampValues } = useContext(BitstampValuesContext);

  console.log("aver component", pairValue, bitstampValues);
 const symbolValue = pairValue.toUpperCase();
 const symbolCoinbase = symbolValue.substring(0, 3);
 const currencyCoinbase = symbolValue.substring(3);
 console.log(symbolValue, symbolCoinbase, currencyCoinbase);
  /**
   * Function to calculate average of exchange rates
   */
  const calculateResult = (arrayValue) => {
    const divider = arrayValue.filter(e=>e !== null).length;
    const sum = arrayValue.reduce((acc, currentValue) => acc + currentValue);
    const average = sum / divider;
    console.log('divider', divider, arrayValue)
    setAverageValue({ [`Average of ${divider} sources`]: average.toFixed(2) });
  };

  /**
   * Bitfinex websocket connection, react lifecycle hook
   */
  useEffect(() => {
   
    const wss = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
    wss.onmessage = (msg) => {
      let value = JSON.parse(msg.data);
      console.log(JSON.parse(msg.data), value[0], value.event);
      if (value.event=== 'error') {
        setBitfinexValue(null);
        console.log('WS error')
      }
      if (value[0]) {
                console.log("WS ok");

        const arrayFixRate = value.flat();
        const averageFixRate =
          typeof arrayFixRate[1] === "string" ? 0 : arrayFixRate[1];
        setBitfinexValue(averageFixRate);
      }
    };

    let msg = JSON.stringify({
      event: "subscribe",
      channel: "ticker",
      symbol: `t${symbolValue}`,
    });
    wss.onopen = () => {
      wss.send(msg);
    };

    return () => {
      wss.close();
    };
  }, [pairValue]);




  /**
   * Coinbase http call, react lifecycle hook
   */
  useEffect(() => {
    axios
      .get(
        `https://api.coinbase.com/v2/exchange-rates?currency=${symbolCoinbase}`
      )
      .then((res) => {
        console.log("coinbase", res.data.data.rates[currencyCoinbase]);
        if (res.data.data.rates[currencyCoinbase]===undefined){setCoinbaseValue(null);
        }else{

          setCoinbaseValue(Number(res.data.data.rates[currencyCoinbase]));
        }
      })
      .catch((err) => {
        throw err;
      });
  }, [symbolCoinbase, currencyCoinbase]);

 

  /**
   * Component update on change values of rates and calculate the average
   */
  useEffect(() => {
    if (bitstampValues ===undefined || !coinbaseValue || !bitfinexValue) return;
    calculateResult([
      Number(bitstampValues.high),
      coinbaseValue,
      bitfinexValue,
    ]);
  }, [bitstampValues, coinbaseValue, bitfinexValue]);

  return (
    <div className={styles.averageContainer}>
      <GJNumbersView title="Average ticker value" data={averageValue} round />
      <Typography align="center">{`${symbolCoinbase} => ${currencyCoinbase}`}</Typography>
    </div>
  );
};
export default AverageTicker;
