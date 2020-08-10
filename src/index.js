import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Canbusreducers from './components/reducers/Canbusreducers'
import { CssBaseline } from "@material-ui/core";
import ThemeEngine from "./components/themeEngine";
import { Provider } from 'react-redux';
import BatteryBuddyApp from "./components/App";


const store = createStore(
  Canbusreducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
  <ThemeEngine>
    <CssBaseline />
    <Router>
      <BatteryBuddyApp />
    </Router>
  </ThemeEngine>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
