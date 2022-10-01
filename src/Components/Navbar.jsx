import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <span className="logo">Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/4156467/pexels-photo-4156467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="portrait user" />
        <span>Breston</span>
        <button>Logout</button>
      </div>
    </div>
  )
}
