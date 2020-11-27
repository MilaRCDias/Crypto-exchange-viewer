import React from 'react';
import { Box, Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  logo: {
    textAlign: "left",
    color: "#58CAA9",
    padding:'2rem'
  },
  navbar: {
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 2px -2px rgba(0,0,0,0.1)",
  
  },
});

const Header = () => {
const style = useStyles();

return (
  <div className={style.navbar}>
    <Box p={2} className={style.logo}>
      <Typography variant="h4" component="h1">
        Cryptocurrency Exchange
      </Typography>
      
    </Box>
  </div>
);
}
export default Header;