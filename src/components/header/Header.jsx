import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='Menu'>
      <div>
        <h3 className='poppins-bold'>Mangesh Pandit</h3>
      </div>
      <div className='menu_right'>
      <a href="#"><span className='home'>Home</span></a>
      <a href="#about">About</a>
      <a href="#project"> <span>Project</span></a>
      <a href="#contact"> <span>Contact</span></a>
      <a href="#top"><span>Resume</span></a>
       
        
       
      
        
      </div>
    </div>
  )
}

export default Header