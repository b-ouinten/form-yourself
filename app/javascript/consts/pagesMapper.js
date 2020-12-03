import React from 'react';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const pagesMap = {
  '': {
    label: 'Home',
    page: <Home />,
  },
  // login: {
  //   label: 'Login',
  //   page: <Login />,
  // },
  register: {
    label: 'Join us',
    page: <Register />,
  },
};

export default pagesMap;