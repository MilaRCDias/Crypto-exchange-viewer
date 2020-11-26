import React , {useState, useEffect} from 'react';
import axios from 'axios';

const getBitstamp = () => {
  axios({
    method: "get",
    url: `https://www.bitstamp.net/api/v2/ticker/btcusd`,
    crossdomain: true,
    
  });
};
const getCoinbase = () => {
  axios({
    method: "get",
    url: `https://api.coinbase.com/v2/exchange-rates?currency=BTC`,
    crossdomain: true,
  
  });
};
const getBitfinex = () => {
  axios({
    method: "get",
    url: `https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD`,
  });
};

const calculateResult=(value1, value2, value3)=>{

console.log(value1, value2, value3);

}

const AverageTicker = () => {
/* const [bitstampValue, setbitstampValue] = useState();
const [coinbaseValue , setCoinbaseValue] = useState();
const [bitfinexValue, setBitfinexValue] = useState(); */

const [averageValue, setAverageValue]= useState();




useEffect(()=>{

    Promise.all([getBitstamp(), getCoinbase(), getBitfinex()]).then(function (
      results
    ) {
        console.log(results)
      calculateResult(results[0],results[1],results[2]) 
    });
})



return(
            <div>
            value
            </div>
    );
}
export default AverageTicker;