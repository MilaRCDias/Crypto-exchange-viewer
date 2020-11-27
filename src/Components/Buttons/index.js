import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Paper } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import componentStyle from "./Button.style";
const useStyles = makeStyles(componentStyle, { name: "Buttons" });

/**
 * *Buttons Presentational Component
 * display list of buttons or loading skeleton
 * @param {array} info
 * @param {function} handleClick
 *  @param {string} selected
 */
const Buttons = ({ info, handleClick, selected }) => {
  const styles = useStyles();

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
                className={
                  data.url_symbol === selected
                    ? styles.buttonSelected
                    : styles.button
                }
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
