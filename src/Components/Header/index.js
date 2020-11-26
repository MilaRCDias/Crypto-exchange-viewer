import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  logo: {
    textAlign: "center",
    color: "green",
    fontFamily: "",
  },
  
});

const Header = () => {
const style = useStyles();

return (
  <div>
    <Box p={2} className={style.logo}>
      <h1 >Cryptocurrency Exchange</h1>
      <h3>*** Trading Viewer App ***</h3>
    </Box>
  </div>
);
}
export default Header;