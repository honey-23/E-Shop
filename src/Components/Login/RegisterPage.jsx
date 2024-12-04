import React, { useState } from 'react';
import './../../Customstylesheet/RegisterPage.css';  // Keep your custom CSS
import Layout from '../Layout/Layout';
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase'; // Import the auth object from Firebase
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
   const navigatelogin = useNavigate();
   const [usersign, setusersign] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
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
        if (!usersign.username || !usersign.email || !usersign.password || !usersign.confirmpassword) {
            return toast.error('Please fill all the fields');
        }

        if (usersign.password !== usersign.confirmpassword) {
            return toast.error('Passwords do not match');
        }

        try {
            // Create user with Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, usersign.email, usersign.password);
            const user = userCredential.user;
            
            // Successfully created the user
            toast.success('Account created successfully!');
            console.log("User Created:", user);

            navigatelogin('/login'); // Redirect to login after successful registration

        } catch (error) {
            // Handle errors
            console.error('Error creating user:', error);
            toast.error(error.message || 'An error occurred while creating the account');
        }
    };

    return (
        <Layout>
            <div className="container mt-5 mb-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="register-card shadow-lg p-4 rounded w-100 w-md-50">
                    <h2 className="text-center  mb-4">Create an Account</h2>
                    <form onSubmit={formsubmit}>
                        {/* Full Name Input */}
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Full Name
                            </label>
                            <input
                                autoComplete='off'
                                value={usersign.username}
                                onChange={submithandler}
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email Address
                            </label>
                            <input
                                autoComplete='off'
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
                                autoComplete='off'
                                value={usersign.password}
                                onChange={submithandler}
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Create a password"
                                required
                            />
                        </div>

                        {/* Confirm Password Input */}
                        <div className="mb-3">
                            <label htmlFor="confirmpassword" className="form-label">
                                Confirm Password
                            </label>
                            <input
                                autoComplete='off'
                                value={usersign.confirmpassword}
                                onChange={submithandler}
                                type="password"
                                className="form-control"
                                id="confirmpassword"
                                name="confirmpassword"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

                        {/* Register Button */}
                        <button type="submit" className="btn btn-primary w-100">
                            Register
                        </button>
                    </form>

                    {/* Login Link */}
                    <p className="text-center mt-3">
                        Already have an account?{' '}
                        <a href="/login" className=" text-decoration-none">
                            Login here
                        </a>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default RegisterPage;
