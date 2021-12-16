import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const navigate = useNavigate()

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        console.log(field)
        const value = e.target.value;
        console.log(value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
        console.log(loginData)

    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("password did not match.")
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate)

        e.preventDefault();
    }

    return (
        <div className='register d-flex flex-column justify-content-center align-items-center w-100'>
            {
                !isLoading &&
                <form onSubmit={handleLoginSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputUserName" className="form-label">User Name</label>
                        <input onBlur={handleOnBlur} name="name" type="text" className="form-control" id="exampleInputUserName" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleOnBlur} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handleOnBlur} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Retype-Password</label>
                        <input onBlur={handleOnBlur} name="password2" type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-dark text-white w-100 px-5 my-2 text-center">Register</button>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/login">
                        <Button variant="dark white w-100 text-center">Already Registered? Please Login</Button>
                    </NavLink>
                </form>
            }
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
        </div>
    );
};

export default Register;