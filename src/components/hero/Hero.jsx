import React from 'react'
import icon from "../../img/javascript.png"
import line from "../../img/Line Vector.png"
import me from "../../img/Group 28.png"
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
                <p>Follow Me</p>
                <img src={icon} alt="icon" className='icon'/>
                <img src={icon} alt="icon" className='icon'/>
                <img src={icon} alt="icon" className='icon'/>
            </div>
        </div>
        

         <div className='flex contact_btn'>
            <div className='email_btn'>
                <div className='flex '>
                    <img src={icon} alt="icon" className='icon'/>
                    <p>Email Me</p>
                </div>
            </div>

            <div className='cv_btn'>
                <div className='flex'>
                    <img src={icon} alt="icon" className='icon'/>
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