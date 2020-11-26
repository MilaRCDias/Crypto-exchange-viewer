import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import Skeleton from "@material-ui/lab/Skeleton";


const useStyles = makeStyles({
  number: {
    fontSize: 30,
    color: "green",
  },
  label: {
    fontSize: 16,
    textAlign: "center",
  },
  numbersWrap:{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
  }
});

const GJNumberLabel = ({data}) => {
    const style = useStyles();

console.log('oioioi',data )



return (
  <div className={style.numbersWrap}>
    {data && data
      ? Object.entries(data).map((dt) => (
          <Box m={2}>
            <div className={style.number}>{dt[1]} </div>
            <div className={style.label}> {dt[0]} </div>
          </Box>
        ))
      : Array.from(new Array(1)).map((data, idx) => (
          <Box key={idx} m={2}>
            {" "}
            <Skeleton
              className={style.number}
              variant="rect"
              width={115}
              height={45}
              animation="wave"
            />
            <br></br>
            <Skeleton
              className={style.label}
              variant="rect"
              width={115}
              height={10}
              animation="wave"
            />
          </Box>
        ))}
  </div>
);
};

GJNumberLabel.propTypes = {
    
};

export default GJNumberLabel;