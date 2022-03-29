import React from 'react'
 import line from "../../img/Line Vector.png"
import me from "../../img/Group 28.png"

import github from "../../img/github.png"
import linkdlin from "../../img/linkdlin.png"
import mobile from "../../img/mobile.png"
import email from "../../img/mail.png"
import download from "../../img/download.png"
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero_main'>
    <div>
        <div className='name_main'>
            <h4 className='hey'>Hey</h4>
            <h1>I’m  <a href='#/'>Mangesh Pandit.</a><br/>an Full Stack Developer.</h1>
            <h2>I’m  <a href='#/'>Mangesh Pandit.</a><br/>an Full Stack Developer.</h2>
            <img src={line} alt="line"  className='line_image'/>
            <p className='line'>It's nice to meet you. I design and code<br/>
            beautifully and I love what I do.</p>
            <div className='flex contact'>
                <p>Connect Me</p>
                <a href="https://github.com/alicehack2020"><img src={github} alt="icon" className='icon'/></a>
                <a href="https://www.linkedin.com/in/mangesh-pandit-392846153/"><img src={linkdlin}alt="icon" className='icon' /></a>
                <a href="tel:+91777826975"><img src={mobile} alt="icon" className='icon' /></a>
            </div>
        </div>
        

         <div className='flex contact_btn'>

            <div className='email_btn'>
            <a href="mailto:mangesh2042@gmail.com?subject=Me&body=Hello!">

                <div className='flex '>
                <img src={email} alt="icon" className='icon2'/> 
                <a href="mailto:mangesh2042@gmail.com?subject=Me&body=Hello!">
                <p>Email Me</p>  
                </a>  
            </div>
            </a>
                
            </div>

            <div className='cv_btn'>
                <div className='flex'>
                    <img src={download} alt="icon" className='icon2'/>
                    <p>Download CV</p>
                </div>
            </div>
             
         </div>
    </div>

    <div>
        <img src={me} alt="me" className='me' />
    </div>


    </div>
  )
}

export default Hero