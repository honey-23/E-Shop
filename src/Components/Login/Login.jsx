import React, { useState } from 'react';
import './../../Customstylesheet/Login.css'; // Make sure to create a corresponding CSS file
import Layout from '../Layout/Layout';
import toast from 'react-hot-toast';
import { auth } from '../../Firebase/Firebase'; // Import the auth object from your Firebase config
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const navigatehome = useNavigate();
  const [usersign, setusersign] = useState({
    email: '',
    password: '',
  });

  const submithandler = (e) => {
    setusersign({
      ...usersign,
      [e.target.name]: e.target.value
    });
  };

  const formsubmit = async (e) => {
    e.preventDefault();
    
    // Validation checks
    if (!usersign.email || !usersign.password) {
      return toast.error('Please fill all the fields');
    }

    try {
      // Sign in user with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, usersign.email, usersign.password);
      const user = userCredential.user;
      
      // Successfully signed in the user
      toast.success('Login successful!');
      console.log("User Logged In:", user);

      // Redirect to homepage
      navigatehome('/');

       // Reload the page
      // window.location.reload(); // This will reload the page after the navigation

    } catch (error) {
      // Handle errors
      toast.error(error.message || 'An error occurred while logging in');
    }
  };

  return (
    <Layout>
      <div className="login-page d-flex justify-content-center align-items-center">
        <div className="login-card shadow p-4">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={formsubmit}>
            {/* Email Input */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                autoComplete="off"
                value={usersign.email}
                onChange={submithandler}
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                autoComplete="off"
                value={usersign.password}
                onChange={submithandler}
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Login Button */}
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>

          {/* Register Link */}
          <div className="text-center mt-3">
            <p>
              Don't have an account? <a href="/register">Register here</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
