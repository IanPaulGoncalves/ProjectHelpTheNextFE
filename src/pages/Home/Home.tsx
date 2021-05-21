import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import '../../components/Styles/style.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    height: '100vh',
    padding: 20
  },
  toolbar: {
    minHeight: 64
  },
  containerBox: {
    display: 'flex',
    width: '100%',
    '@media(max-width: 700px)': {
      flexDirection: 'column'
    }
  }
});


function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar} />
      <main className={classes.main}>
        <Container maxWidth="lg">
          <Box className={classes.containerBox}>
            <NavBar />
            <Feed />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default Home;