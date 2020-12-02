import React from 'react';

import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';

const pagesMap = {
  '': {
    label: 'Home',
    page: <Home />,
  },
  login: {
    label: 'Login',
    page: <Login />,
  },
  register: {
    label: 'Join us',
    page: <Register />,
  },
};

export default pagesMap;