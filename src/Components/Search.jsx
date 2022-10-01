import React from 'react'

export default function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/5473391/pexels-photo-5473391.jpeg?auto=compress&cs=tinysrgb&w=600" alt="user chat"/>
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}
