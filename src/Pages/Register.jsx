import React from 'react'
import './style.scss' 
import add from './../assets/images/addAvatar.png'

export default function Register() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor="file">
                    <img src={add} alt="add icon" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            <p>You do have an account ? Login</p>
            </form>
        </div>
    </div>
  )
}
