import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Routes from '../routes';

const App = () => (
  <Router>
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