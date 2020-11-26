import React from 'react';
import PropTypes from 'prop-types';
import { Grid, makeStyles, Typography, Box } from "@material-ui/core";
import GJNumberLabel from '../GJNumberLabel​'

const useStyles = makeStyles({
 
  gjview:{
    margin: 'auto'
  },
});


/**
 *  Presentational component 
 */

const GJNumbersView = ({title, data}) => {
   const styles = useStyles();
   
    return (
      <Grid container className={styles.gjview}>
        <Box m={2}>
          <Grid item xs={12}>
            <Typography variant="h6" component="h2" align="center">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <GJNumberLabel data={data} />
          </Grid>
        </Box>
      </Grid>
    );
};

GJNumbersView.propTypes = {
  title: PropTypes.string,
  data: PropTypes.shape(),
};

export default GJNumbersView;