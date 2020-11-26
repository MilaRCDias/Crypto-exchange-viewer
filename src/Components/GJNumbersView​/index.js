import React from 'react';
import PropTypes from 'prop-types';
import { Grid,  Typography, Box } from "@material-ui/core";
import GJNumberLabel from '../GJNumberLabel​'



/**
 *  Presentational component 
 */

const GJNumbersView = ({title, data}) => {
  
   
    return (
      <Grid container>
        <Box my={4} mx="auto">
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