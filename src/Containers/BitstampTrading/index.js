import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Buttons from '../../Components/Buttons'



/**
 *  Select Bitstamp tranding values
 *  select a tranding value pair and display values
 */
const BitstampTrading = () => {
  const [selectedPairValue, setSelectedPairValue] = useState("gbpusd");  
  const [buttonValues, setButtonValues] = useState();
  const [displayValue, setDisplayValue] = useState();

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
        <Buttons
          info={buttonValues}
          handleClick={setSelectedPairValue}
          selected={selectedPairValue}
        />
        <div>{displayValue?.high}</div>
      </div>
    );
}
export default BitstampTrading;