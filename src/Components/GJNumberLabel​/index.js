import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import Skeleton from "@material-ui/lab/Skeleton";


const useStyles = makeStyles({
  number: {
    fontSize: 30,
  //  color: "#ffffff",
    textAlign: "center",
  },
  label: {
    fontSize: 18,
    textAlign: "center",
    marginTop: '0.5rem'
  },
  numbersWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    borderRadius: 16,
    boxShadow:
      "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)",
   
    background: "#ffffff",
    minWidth: "12rem",
    height: "7rem",
    margin: "0.5rem",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#5378a4"
  },
  roundCard: {
    minWidth: "11rem",
    minHeight: "11rem",
    margin: "0.5rem",
    padding: "0.75rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "rgba(0,175,124,0.3)",
    borderRadius: "50%",
    flexWrap: 'wrap',
    color: '#ffffff'
  },
});

const GJNumberLabel = ({data, round}) => {
    const style = useStyles();


console.log('vi', data)

return (
  <div className={style.numbersWrap}>
    {data && data
      ? Object.entries(data).map((dt) => {
          const numberValue =
            dt[0] === "timestamp" ? dt[1] : Number(dt[1]).toFixed(2);
          return (
            <div className={round ? style.roundCard : null} key={dt[0]}>
              <div className={round ? style.roundCard : null}>
                <div m={2} className={round ? style.roundCard : style.card}>
                  <div className={style.number}>{numberValue} </div>
                  <div className={style.label}> {dt[0]} </div>
                </div>
              </div>{" "}
            </div>
          );
        })
      : Array.from(new Array(1)).map((data, idx) => (
          <Box key={idx} m={2}>
            {" "}
            <Skeleton
              className={style.number}
              variant={round ? "circle" : "rect"}
              width={round ?200:137}
              height={200}
              animation="wave"
            />
          </Box>
        ))}
  </div>
);
};

GJNumberLabel.defaultProps ={
  data: {},
  round: false,
}

GJNumberLabel.propTypes = {
    data: PropTypes.shape({}),
    round: PropTypes.bool,
};

export default GJNumberLabel;