import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
  typography: {
    "fontFamily": `"Asap","Roboto", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
  },
  palette: {
    primary: {
      main: '#282c34',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D9D9D9'
    }
  }
});

ReactDOM.render(
  <div>
    <MuiThemeProvider theme={THEME}>
      <App />
    </MuiThemeProvider>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
