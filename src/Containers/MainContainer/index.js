import React from 'react';
import { Grid } from '@material-ui/core';
import AverageTicker from '../AverageTicker';
import BitstampTrading from '../BitstampTrading';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    
  },
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





return (
  <Grid container spacing={3} className={styles.root}>
    <Grid item xs={12} sm={6} className={styles.averageWrap}>
      <AverageTicker />
    </Grid>
    <Grid item xs={12} sm={6} className={styles.bitstampWrap}>
      <BitstampTrading />
    </Grid>
  </Grid>
);
};




export default MainContainer;