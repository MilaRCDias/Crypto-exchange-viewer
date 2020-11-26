import React, { useState, useEffect } from "react";
import axios from "axios";



/**
 *  Average ticker container (column 1)
 * 
 * Container component with api calls
 * 
 *  */ 

const AverageTicker = () => {
  const [bitstampValue, setbitstampValue] = useState(undefined);
  const [coinbaseValue, setCoinbaseValue] = useState();
  const [bitfinexValue, setBitfinexValue] = useState();
  const [averageValue, setAverageValue] = useState("");

  /**
   * Function to calculate average of exchange rates
   */
  const calculateResult = (value1, value2, value3) => {
    const average = (value1 + value2 + value3) / 3;
    setAverageValue(average.toFixed(2));
  };

  /**
   * Bitfinex websocket connection, react lifecycle hook
   */
  useEffect(() => {
    const wss = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
    wss.onmessage = (msg) => {
      let value = JSON.parse(msg.data);
      if (value[0]) {
        const arrayFixRate = value.flat();
        const averageFixRate =
          typeof arrayFixRate[1] === "string" ? 0 : arrayFixRate[1];
        setBitfinexValue(averageFixRate);
      }
    };

    let msg = JSON.stringify({
      event: "subscribe",
      channel: "ticker",
      symbol: "tBTCUSD",
    });
    wss.onopen = () => {
      wss.send(msg);
    };

    return () => {
      wss.close();
    };
  }, []);

  /**
   * Coinbase http call, react lifecycle hook
   */
  useEffect(() => {
    axios
      .get(`https://api.coinbase.com/v2/exchange-rates?currency=BTC`)
      .then((res) => {
        setCoinbaseValue(Number(res.data.data.rates.USD));
      })
      .catch((err) => {
        throw err;
      });
  },[]);

  /**
   *  Bitstamp http call,react lifecycle hook
   */
  useEffect(() => {
    if (bitstampValue) return;
    axios({
      method: "get",
      url: `https://www.bitstamp.net/api/v2/ticker/btcusd`,
      crossDomain: true,
    })
      .then((res) => {
        setbitstampValue(Number(res.data.high));
      })
      .catch((err) => {
        throw err;
      });
  });
  /**
   * Component update on change values of rates and calculate the average
   */
  useEffect(() => {
    if (!bitstampValue || !coinbaseValue || !bitfinexValue) return;
    calculateResult(bitstampValue, coinbaseValue, bitfinexValue);
  }, [bitstampValue, coinbaseValue, bitfinexValue]);

  return <div>value {averageValue}</div>;
};
export default AverageTicker;
