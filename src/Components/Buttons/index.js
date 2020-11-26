import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Paper } from '@material-ui/core';
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    maxHeight: 250,
    overflowY: "scroll",
    margin: "0.5rem 0.5rem 2.5rem ",
  },
});

const Buttons = ({info, handleClick, selected}) => {
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
                value={data.url_symbol}
                color={data.url_symbol === selected ? "primary" : "default"}
              >
                {data.name}
              </Button>{" "}
            </Box>
          ))}
    </Paper>
  );
};

Buttons.propTypes = {
  info: PropTypes.array,
  handleClick: PropTypes.func,
  selected: PropTypes.string,
};

export default Buttons;