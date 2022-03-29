import React from 'react'
import "./Work.css"
import icon from "../../img/javascript.png"

const Work = () => {
  return (
    <div className='work'>
      
        <div className='working'>
            <h1>Interested working with me?</h1>
        </div>

        <div className='flex contact_btn work_contact'>
            
            <div className='email_btn email_me'>
                <div className='flex '>
                    <img src={icon} alt="icon" className='icon'/>
                    <p>Email Me</p>
                </div>
            </div>

            <div className='cv_btn more_project'>
                <div className='flex'>
                    <img src={icon} alt="icon" className='icon'/>
                    <p>Download CV</p>
                </div>
            </div>
             
         </div>
       
    </div>
  )
}

export default Work