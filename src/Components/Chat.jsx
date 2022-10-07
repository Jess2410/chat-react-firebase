import React, { useContext } from 'react'
import Cam from './../assets/images/cam.png'
import Add from './../assets/images/add.png'
import More from './../assets/images/more.png'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'


export default function Chat() {

  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="icon" />
          <img src={Add} alt="icon" />
          <img src={More} alt="icon" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}
