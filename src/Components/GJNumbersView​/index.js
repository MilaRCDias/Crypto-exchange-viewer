import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles } from '@material-ui/core';
import GJNumberLabel from '../GJNumberLabel​'

const useStyles = makeStyles({
    title:{
        textAlign: 'center',
    }
})


/**
 *  Presentational component 
 */

const GJNumbersView = ({title, data}) => {
   const styles = useStyles();
   
    return (
      <Grid container>
        <Grid item xs={12}>
          <h2 className={styles.title}>{title}</h2>
        </Grid>
        <Grid item xs={12}>
         
          <GJNumberLabel data={data} />
        </Grid>
      </Grid>
    );
};

GJNumbersView.propTypes = {
  title: PropTypes.string,
  data: PropTypes.shape(),
};

export default GJNumbersView;