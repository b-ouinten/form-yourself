import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";

import PagesContainer from './pages/pageContainer'; 

const Routes = () => (
  <Switch>
    <Route exact path="/" component={PagesContainer} />
    <Route path='/:slug' component={PagesContainer} />
  </Switch>
)

export default Routes;