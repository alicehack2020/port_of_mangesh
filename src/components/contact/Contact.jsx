import React from 'react'
import "./Contact.css"
import Connect from "../connect/Connect"
const Contact = () => {
  return (
    
    <div className='contact_main' id='work'>
            <div className='lets'>
                <h2>Let's make something amazing together.</h2>
                 <a href="https://firebasestorage.googleapis.com/v0/b/resume-eff78.appspot.com/o/resume.pdf?alt=media&token=f47c5fec-36de-41dd-b7d4-77085b21564c" target="_blank">
                  <div className='btn_conect resume_btn'> Resume</div>
                </a>
                <div>
                  <Connect></Connect>
                </div>
                
            </div>

           
            <div className='contact_form'>
                <h2>We’d Love To Hear From You</h2><br />
                <input type="text" name="" id="" placeholder='Enter your name' /><br />
                <input type="text" name="" id="" placeholder='Enter your email'/><br />
                <textarea type="" name="" id="" placeholder='Write your message'/><br />
                <div className='btn_conect email_btn'>Email Me</div>   
            </div>   
    </div>
  )
}

export default Contact