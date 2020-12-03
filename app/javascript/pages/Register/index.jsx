import React from 'react';
import Auth from '../Auth';

const Register = () => (
  <Auth type="register">
<nav className="login-form mt-5 mb-4 justify-content-center">
  <div className="container">
      <div className="col-md-6">
          <div className="card">
              <div className="card-header bg-primary">
                <h4 className="text-white text-center">Sign-Up</h4>
              </div>
              <div className="card-body">
              <div className="form-group row">
        <label htmlFor="email" className="col-md-5 text-md-right">
          Email</label>
          <input placeholder="Enter an email" name="email" />
              </div>
              </div>
              <div className="form-group row">
        <label htmlFor="password" className="col-md-5 text-md-right">
          Password</label>
          <input type="password" placeholder="Enter a password" name="password" />
        </div>
        <div className="form-group text-center">
        <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  </div>
</nav>
  </Auth>
  
);

export default Register;


