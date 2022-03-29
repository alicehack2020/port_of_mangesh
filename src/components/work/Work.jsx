import React from 'react'
import "./Work.css"
 import email from "../../img/mail.png"
import download from "../../img/download.png"
const Work = () => {
  return (
    <div className='work'>
      
        <div className='working'>
            <h1>Interested working with me?</h1>
        </div>

        <div className='flex contact_btn work_contact'>
            
            <div className='email_btn email_me2'>
            <a href="mailto:mangesh2042@gmail.com?subject=Me&body=Hello!">
                <div className='flex '>
                <img src={email} alt="icon" className='icon2'/>
                    <p>Email Me</p>
                </div>
                </a>
            </div>
            <div className='cv_btn more_project2'>
            <a href="https://firebasestorage.googleapis.com/v0/b/resume-eff78.appspot.com/o/resume.pdf?alt=media&token=f47c5fec-36de-41dd-b7d4-77085b21564c">
                <div className='flex'>
              
                <img src={download} alt="icon" className='icon2'/>
                    <p>Download CV</p>
                </div>
                </a>
            </div>
             
         </div>
       
    </div>
  )
}

export default Work