import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import Navbar from "../components/Navbar"



import Routes from '../routes';

import "bootswatch/dist/cyborg/bootstrap.min.css";


const App = () => (
  <Router>
    <Navbar />
    <Routes />
  </Router>
);

export default App