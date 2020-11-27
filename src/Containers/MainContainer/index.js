import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import AverageTicker from "../AverageTicker";
import BitstampTrading from "../BitstampTrading";
import { makeStyles } from "@material-ui/core/styles";
import {
  PairValuesContext,
  BitstampValuesContext,
} from "../../store/pairsContext";

const useStyles = makeStyles({
  root: {},
  averageWrap: {
    height: "100%",
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

});

const MainContainer = () => {
  const styles = useStyles();

  const [pairValue, setPairValue] = useState("btcusd");
  const [bitstampValues, setBitstampValues] = useState();

  return (
    <Grid container spacing={3} className={styles.root}>
      <PairValuesContext.Provider value={{ pairValue, setPairValue }}>
        <BitstampValuesContext.Provider
          value={{ bitstampValues, setBitstampValues }}
        >
          <Grid item xs={12} sm={5}>
            <Paper elevation={3} className={styles.averageWrap}>
              <AverageTicker />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={7} >
            <BitstampTrading />
          </Grid>
        </BitstampValuesContext.Provider>
      </PairValuesContext.Provider>
    </Grid>
  );
};

export default MainContainer;
