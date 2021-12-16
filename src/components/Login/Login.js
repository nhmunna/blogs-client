import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const [loginData, setLoginData] = useState({});

    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }
    return (
        <div className='login d-flex flex-column justify-content-center align-items-center w-100'>
            <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label text-white">Email address</label>
                    <input name="email" onBlur={handleOnChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label text-white">Password</label>
                    <input name="password" onBlur={handleOnChange} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-dark text-white w-100 px-5 my-2 text-center">login</button>
                <br />
                <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/register">
                    <Button variant="dark white w-100 text-center">New User? Please Register</Button>
                </NavLink>
                {isLoading && <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
                {
                    user?.email && <div className="alert alert-primary" role="alert">
                        Login Successful
                    </div>
                }
                {
                    authError && <div className="alert alert-primary" role="alert">
                        {authError}
                    </div>
                }
            </form>
            <br />
            <Button onClick={handleGoogleSignIn} variant="warning">Google Sign In</Button>
        </div>
    );
};

export default Login;