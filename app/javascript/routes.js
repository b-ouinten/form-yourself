import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";
import Home from './pages/Home'
import Register from './pages/Register'
import Calendar from './pages/Calendar'

const Routes = () => (
  <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/register' component={Register} />
      <Route path='/calendar' component={Calendar} />
  </Switch>
)

export default Routes;