import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import './App.css';
import Box from '@material-ui/core/Box';
import {Grid, Paper, Typography} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Login from "./components/Login/Login";

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#90caf9',
    },
  },
});

function App() {

  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <Login />
      </ThemeProvider>
  );
}

export default App;
