import React from 'react';

import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Calendar from '../pages/Calendar';

const pagesMap = {
  '': {
    label: 'Home',
    page: <Home />,
  },
  register: {
    label: 'Join us',
    page: <Register />,
  },
  login: {
  label: 'Login',
  page: <Login />,
  },
  calendar: {
    label: 'Sessions planning',
    page: <Calendar />,
  }
};

export default pagesMap;