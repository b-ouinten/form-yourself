import "bootswatch/dist/cyborg/bootstrap.min.css";

import React from 'react';
import { Provider } from 'react-redux';

import Navbar from "./Navbar";
import Routes from '../routes';
import store from '../redux-config/store';

const App = () => (
    <Provider store={store}>
      <Navbar />
      <Routes />
    </Provider>
);

export default App;
