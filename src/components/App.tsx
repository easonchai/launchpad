import React from 'react';
import logo from '../logo.png';
import List from './List';
import { Typography, Box, Container } from '@material-ui/core';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Box display="flex" justifyContent="center">
          <img src={logo} width="100vh" alt="logo" style={{ padding: 10 }} />
        </Box>
        <Typography component="div">
          <Box display="flex" justifyContent="center" fontSize={20}>
            You are one step closer to launching your React App to GitHub pages!
          </Box>
        </Typography>
        <List />
      </Container>
    </React.Fragment>
  );
}

export default App;
