import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Paper, Typography, Box, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Buttons from "../../Components/Buttons";
import GJNumbersView from "../../Components/GJNumbersView​";
import {
  PairValuesContext,
  BitstampValuesContext,
} from "../../store/pairsContext";

const useStyles = makeStyles({
  trandingValues: {
      paddingTop: '1rem',
    minHeight: 380,
  },
  titlePair: {
    padding: "1rem",
  },
  trandingButtons: {
    borderRadius: 20,
    paddingBottom: 1,
 
  },
});

/**
 *  Select Bitstamp tranding values (column 2)
 *  Container component
 *  select a tranding value pair and display values
 */
const BitstampTrading = () => {
  const styles = useStyles();
  const [buttonValues, setButtonValues] = useState();
  const [displayValue, setDisplayValue] = useState();
  const { pairValue, setPairValue } = useContext(PairValuesContext);
  const {  setBitstampValues } = useContext(BitstampValuesContext);

  /**
   * Get button pair info from Api on component did mount
   */
  useEffect(() => {
    axios
      .get("https://www.bitstamp.net/api/v2/trading-pairs-info/")
      .then((res) => {
        setButtonValues(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  /**
   *  Get values from Api on button click
   */
  useEffect(() => {
    axios
      .get(`https://www.bitstamp.net/api/v2/ticker/${pairValue}/ `)
      .then((res) => {
        setDisplayValue(res.data);
        setBitstampValues(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [pairValue]);

  return (
    <div>
      <Paper elevation={3} className={styles.trandingButtons}>
        <div className={styles.titlePair}>
          <Typography variant="h6" component="h3" color="textSecondary">
            Choose the exchange pair:
          </Typography>
        </div>
        <Buttons
          info={buttonValues}
          handleClick={setPairValue}
          selected={pairValue}
        />
      </Paper>
      <div className={styles.trandingValues}>
        <GJNumbersView title="Bitstamp Trading Values" data={displayValue} />
      </div>
    </div>
  );
};
export default BitstampTrading;
