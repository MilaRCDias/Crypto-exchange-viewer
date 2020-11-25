import React from 'react';
import { Grid } from '@material-ui/core';
import AverageTicker from '../../Components/AverageTicker';
import BitstampTrading from '../../Components/BitstampTrading';


const MainContainer = (props) => (
  <Grid container spacing={3}>
    <Grid item xs={6}><AverageTicker /></Grid>
    <Grid item xs={6}><BitstampTrading /></Grid>
  </Grid>
);

export default MainContainer;