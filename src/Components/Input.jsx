import React from 'react'
import Img from './../assets/images/img.png'
import Attach from './../assets/images/attach.png'

export default function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <img src={Attach} alt="icon attach" />
        <input type="file" style={{display: "none"}}  id="file" />
        <label htmlFor="file">
        <img src={Img}alt="img icon" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}
