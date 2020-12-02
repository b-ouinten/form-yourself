import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import {Navbar} from "./components/Navbar.js"



const App = () => (
  <Router>
    <Navbar />
    <div>
      Hello world !
    </div>

    <Switch>
      <Route>

      </Route>
    </Switch>
  </Router>
)

export default App;