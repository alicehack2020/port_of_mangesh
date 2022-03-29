import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='Menu'>
      <div>
        <h3 className='poppins-bold'>Mangesh Pandit</h3>
      </div>
      <div className='menu_right'>
      <a href="#Home"><span className='home'>Home</span></a>
      <a href="#about"> <span>About</span></a>
      <a href="#project"> <span>Project</span></a>
      <a href="#contact"> <span>Contact</span></a>
      <a href="https://firebasestorage.googleapis.com/v0/b/resume-eff78.appspot.com/o/resume.pdf?alt=media&token=f47c5fec-36de-41dd-b7d4-77085b21564c"><span>Resume</span></a>
       
        
       
      
        
      </div>
    </div>
  )
}

export default Header