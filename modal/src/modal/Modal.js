import React from 'react'
import './Modal.css'

export default function Modal({children}) {
  return (
    <div className='cd-popup is-visible' role='alert'>
      <div className='cd-popup-container'>
        {children}
        <a href="#0" className='cd-popup-close img-replace' style={{fontSize:"15px"}}>X</a>
      </div>
    </div>
  )
}
