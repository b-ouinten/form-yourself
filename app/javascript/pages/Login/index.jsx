import React from 'react';
import Auth from '../Auth';

const Login = () => (
  <Auth type="login">
<nav className="login-form mt-5 mb-4 justify-content-center">
  <div className="container">
      <div className="col-md-6">
          <div className="card">
              <div className="card-header bg-primary">
                <h4 className="text-white text-center">Log-In</h4>
              </div>
              <div className="card-body">
              <div className="form-group row">
							<label htmlFor="identifier"className="col-md-5 text-md-right">
      Identifier</label>
      <input type="text" placeholder="Enter username or email" name="identifier" />
              </div>
              </div>
              <div className="form-group row">
							<label htmlFor="password"className="col-md-5 text-md-right">
      Password</label>
      <input type="password" placeholder="Enter password" name="password" />
        </div>
        <div className="form-group text-center">
        <button type="submit" className="btn btn-primary mx-5">Submit</button>
        </div>
      </div>
    </div>
  </div>
</nav>
  </Auth>
  
);

export default Login;





