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
                <div className='flex '>
                <img src={email} alt="icon" className='icon2'/>
                    <p>Email Me</p>
                </div>
            </div>

            <div className='cv_btn more_project2'>
                <div className='flex'>
                <img src={download} alt="icon" className='icon2'/>
                    <p>Download CV</p>
                </div>
            </div>
             
         </div>
       
    </div>
  )
}

export default Work