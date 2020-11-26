import React from 'react'
import MainContainer from '../Containers/MainContainer'
import Header from '../Components/Header'
import { Container, Grid } from '@material-ui/core'


const App = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
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
