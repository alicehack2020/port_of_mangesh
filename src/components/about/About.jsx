import React from 'react'
import "./About.css"
import skillicon from "../../img/javascript.png"
const About = () => {
  return (
    <div className='about_main'>
        <div className='about_heading'>
            <h1>About Me</h1>
        </div>

        <div className='about_div'>
            <p className='about_line'>Creativity is Intelligence Having Fun...!</p>
            <p className='about_me'>
            I am currently working in eGlobalDoctors. I am passionate <br/>
            about solving real-world problems in the field of web <br/>
            development and software engineering.
            </p>
        </div>

        <div className='skill_div'>
        <p>Skill</p>
        <div className='skill'>
            <div><img src={skillicon} alt="skill" className='skill_img'/></div>
            <div><img src={skillicon} alt="skill" className='skill_img'/></div>
            <div><img src={skillicon} alt="skill" className='skill_img'/></div>
            <div><img src={skillicon} alt="skill" className='skill_img'/></div>
            <div><img src={skillicon} alt="skill" className='skill_img'/></div>
            <div><img src={skillicon} alt="skill" className='skill_img'/></div>
            <div><img src={skillicon} alt="skill" className='skill_img' /></div>
            <div><img src={skillicon} alt="skill" className='skill_img'/></div>
            <div><img src={skillicon} alt="skill" className='skill_img'/></div>
            <div><img src={skillicon} alt="skill" className='skill_img' /></div>
          </div>
          
        
        </div>

        <div className='skill_div'>
        <p>Tool</p>
        <div className='skill'>
            
            <div><img src={skillicon} alt="skill" className='skill_img'/></div>
            <div><img src={skillicon} alt="skill" className='skill_img'/></div>
            <div><img src={skillicon} alt="skill" className='skill_img'/></div>
            <div><img src={skillicon} alt="skill" className='skill_img'/></div>
            <div><img src={skillicon} alt="skill" className='skill_img'/></div>
            <div><img src={skillicon} alt="skill" className='skill_img' /></div>
            <div><img src={skillicon} alt="skill" className='skill_img'/></div>
            <div><img src={skillicon} alt="skill" className='skill_img'/></div>
            <div><img src={skillicon} alt="skill" className='skill_img' /></div>
        </div>
          
        
        </div>
    </div>
  )
}

export default About