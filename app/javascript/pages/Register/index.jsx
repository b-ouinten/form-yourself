import React from 'react';
import Auth from '../Auth';

const Register = () => (
  <Auth type="register">
    <label htmlFor="email">
      Email
      <input placeholder="Enter an email" name="email" />
    </label>

    <label htmlFor="password">
      Password
      <input type="password" placeholder="Enter a password" name="password" />
    </label>
  </Auth>
);

export default Register;