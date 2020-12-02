import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import {Navbar} from "./components/Navbar.js"



import Routes from '../routes';

import "bootswatch/dist/cyborg/bootstrap.min.css";


const App = () => (
  <Router>
    <Navbar />
    <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
    <hr />
    </div>
    <Routes />
  </Router>
);

export default App