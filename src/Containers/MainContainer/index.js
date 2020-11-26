import React from 'react';
import { Grid } from '@material-ui/core';
import AverageTicker from '../AverageTicker';
import BitstampTrading from '../BitstampTrading';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "lightGray",
    minHeight:300,
  },
});

const MainContainer = () => {
const styles = useStyles();





return (
  <Grid container spacing={3} className={styles.root}>
    <Grid item xs={12} md={6}>
      <AverageTicker  />
    </Grid>
    <Grid item xs={12} md={6}>
      <BitstampTrading />
    </Grid>
  </Grid>
);
};




export default MainContainer;