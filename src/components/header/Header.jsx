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
        <a href="/#" rel="noreferrer"><span className='home'>Home</span></a>
        <a href="#About" rel="noreferrer"> <span>About</span></a>
        <a href="#Project" rel="noreferrer"> <span>Project</span></a>
        <a href="#skillsadvance2" rel="noreferrer"> <span>Skill</span></a>
        <a href="#work" rel="noreferrer" className='contactmobile'> <span>Contact</span></a>
        <a href="#work" rel="noreferrer" className='web'> <span>Contact</span></a>
        <a href="https://firebasestorage.googleapis.com/v0/b/resume-eff78.appspot.com/o/resume.pdf?alt=media&token=f47c5fec-36de-41dd-b7d4-77085b21564c" target="_blank" rel="noreferrer"><span>Resume</span></a>
      </div>
    </div>
  )
}

export default Header