import React, { useState } from "react";
import { Grid } from "@material-ui/core";
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
    display: "flex",
    justifyContent: "center",
  },
  bitstampWrap: {
    backgroundColor: "#f3f3f3",
  },
});

const MainContainer = () => {
  const styles = useStyles();

  const [pairValue, setPairValue] = useState("gbpusd");
  const [bitstampValues, setBitstampValues] = useState();

  return (
    <Grid container spacing={3} className={styles.root}>
      <PairValuesContext.Provider value={{ pairValue, setPairValue }}>
        <BitstampValuesContext.Provider
          value={{ bitstampValues, setBitstampValues }}
        >
          <Grid item xs={12} sm={6} className={styles.averageWrap}>
            <AverageTicker />
          </Grid>
          <Grid item xs={12} sm={6} className={styles.bitstampWrap}>
            <BitstampTrading />
          </Grid>
        </BitstampValuesContext.Provider>
      </PairValuesContext.Provider>
    </Grid>
  );
};

export default MainContainer;
