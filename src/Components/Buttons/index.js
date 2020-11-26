import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";


const useStyles = makeStyles({
  root: {
   display: 'flex',
   flexWrap: 'wrap',
   maxHeight: 250,
   overflowY:'scroll',
  },
});

const Buttons = ({info, handleClick}) => {
    const styles= useStyles();
 
  return (
    <Paper elevation={0} className={styles.root}>
      {info === undefined
        ? Array.from(new Array(30)).map((data, idx) => (
            <Box key={idx} m={1}>
              {" "}
              <Skeleton
                variant="rect"
                width={95}
                height={35}
                animation="wave"
              />
            </Box>
          ))
        : info.map((data) => (
            <Box key={data.name} m={1}>
              {" "}
              <Button
                onClick={() => handleClick(data.url_symbol)}
                variant="contained"
              >
                {data.name}
              </Button>{" "}
            </Box>
          ))}
    </Paper>
  );
};

Buttons.propTypes = {
    
};

export default Buttons;