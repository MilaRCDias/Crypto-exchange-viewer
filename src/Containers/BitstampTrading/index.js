import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Buttons from '../../Components/Buttons'
import GJNumbersView from '../../Components/GJNumbersView​';
import { Paper, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  trandingValues: {
    minHeight: 400,
  },
});


/**
 *  Select Bitstamp tranding values (column 2)
 *  Container component 
 *  select a tranding value pair and display values
 */
const BitstampTrading = () => {
  const [selectedPairValue, setSelectedPairValue] = useState("gbpusd");  
  const [buttonValues, setButtonValues] = useState();
  const [displayValue, setDisplayValue] = useState();
const styles = useStyles()
/**
 * Get button pair info from Api on component did mount
 */
useEffect(()=>{
    axios.get("https://www.bitstamp.net/api/v2/trading-pairs-info/").then((res)=>{

setButtonValues(res.data);
    }).catch((err)=>{throw err});
},[]);


/**
 *  Get values from Api on button click
 */
useEffect(() => { 
  axios
    .get(`https://www.bitstamp.net/api/v2/ticker/${selectedPairValue}/ `)
    .then((res) => {
    
      setDisplayValue(res.data);
    })
    .catch((err)=>{throw err});
}, [selectedPairValue]);




    return (
      <div>
        <div>
          <Typography variant="h5" component="h3" color="textSecondary">
            Choose the exchange pair:
          </Typography>
          <Buttons
            info={buttonValues}
            handleClick={setSelectedPairValue}
            selected={selectedPairValue}
          />
        </div>
        <Paper elevation={3} className={styles.trandingValues}>
          <GJNumbersView title="Bitstamp Trading Values" data={displayValue} />
        </Paper>
      </div>
    );
}
export default BitstampTrading;