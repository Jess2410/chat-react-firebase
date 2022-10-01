import React from 'react'

export default function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
          <img src="https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="photo avatar" />
          <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="photo avatar" />
      </div>
    </div>
  )
}
