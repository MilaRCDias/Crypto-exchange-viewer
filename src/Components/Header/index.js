import React from 'react';
import { Box, Typography, makeStyles} from "@material-ui/core";

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
      <Typography variant="h2" component="h1">
        Cryptocurrency Exchange
      </Typography>
      <h3>*** Trading Viewer App ***</h3>
    </Box>
  </div>
);
}
export default Header;