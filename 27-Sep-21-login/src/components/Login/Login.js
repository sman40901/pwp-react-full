import React, { Component } from 'react';
import './Login.css';



function Login() {
    return (
        <div className='loginform'>
            <h2>Please login</h2>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;