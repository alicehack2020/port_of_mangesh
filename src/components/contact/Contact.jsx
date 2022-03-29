import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact_main' >
            <div className='lets'>
                <h2>Let's make something amazing together.</h2>
                <div className='btn_conect resume_btn'> Resume</div>
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