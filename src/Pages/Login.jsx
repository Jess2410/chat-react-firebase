import React from 'react'
import './style.scss' 

export default function Login() {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <button>Sign In</button>
                <p>You don't have an account ? Register</p>
                </form>
            </div>
        </div>
      )
    }
    