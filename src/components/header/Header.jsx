import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='Menu'>
      <div>
        <p className='poppins-bold'>Mangesh Pandit</p>
      </div>
      <div className='menu_right'>
        <div>About</div>
        <div>Project</div>
        <div>Contact</div>
        <div>Resume</div>
      </div>
    </div>
  )
}

export default Header