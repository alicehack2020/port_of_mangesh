import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='Menu'>
      <div>
      <a href="/#">
        <h3 className='poppins-bold'>Mangesh Pandit</h3>
        </a>
      </div>
      <div className='menu_right'>
      <a href="/#"><span className='home'>Home</span></a>
      <a href="#About"> <span>About</span></a>
      <a href="#Project"> <span>Project</span></a>
      <a href="#Contact"> <span>Contact</span></a>
      <a href="https://firebasestorage.googleapis.com/v0/b/resume-eff78.appspot.com/o/resume.pdf?alt=media&token=f47c5fec-36de-41dd-b7d4-77085b21564c"><span>Resume</span></a>
  
      </div>
    </div>
  )
}

export default Header