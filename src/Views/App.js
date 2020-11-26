import React from 'react'
import MainContainer from '../Containers/MainContainer'
import Header from '../Components/Header'
import { Container, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
main:{
      marginBottom: '4rem'
  },


})

const App = () => {

  const styles = useStyles();

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} className={styles.main}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <MainContainer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
