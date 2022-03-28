import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='Menu'>
      <div>
        <h3 className='poppins-bold'>Mangesh Pandit</h3>
      </div>
      <div className='menu_right'>
        <span className='home'>Home</span>
        <span>About</span>
        <span>Project</span>
        <span>Contact</span>
        <span>Resume</span>
      </div>
    </div>
  )
}

export default Header