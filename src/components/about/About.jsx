import React from 'react'
import "./About.css"
import skillicon from "../../img/javascript.png"
import html from "../../img/html.png"
import css from "../../img/css.png"
import rdius from "../../img/redis.png"
import next from "../../img/next js.png"
import react from "../../img/react.png"
import sql from "../../img/mysql.png"
import mongo from "../../img/mongodb.png"
import express from "../../img/express.png"
import nodejs from "../../img/nodejs.png"
import redux from "../../img/redux.png"

import material from "../../img/material.png"
import firebase from "../../img/firebase.png"
import styles from "../../img/styled.png"
const About = () => {
  return (
    <div className='about_main' id='About'>
        <div className='about_heading'>
            <h1>About Me</h1>
        </div>

        <div className='about_div'>
            <p className='about_line'>Creativity is Intelligence Having Fun...!</p>
            <p className='about_me'>
            Experienced with all stages of the development cycle for
            dynamic web projects. Well-versed in numerous
            programming languages including HTML5, JavaScript, CSS
            </p>
        </div>

        <div className='skill_div'>
        <p>Skill</p>
        <div className='skill'>
            <div><img src={skillicon} alt="skill" className='skill_img'/></div>
            <div><img src={html} alt="skill" className='skill_img'/></div>
            <div><img src={css} alt="skill" className='skill_img'/></div>
            <div><img src={rdius} alt="skill" className='skill_img'/></div>
            <div><img src={next} alt="skill" className='skill_img'/></div>
            <div><img src={react} alt="skill" className='skill_img' /></div>
            <div><img src={sql} alt="skill" className='skill_img'/></div>
            <div><img src={mongo} alt="skill" className='skill_img'/></div>
            <div><img src={express} alt="skill" className='skill_img' /></div>
            <div><img src={nodejs} alt="skill" className='skill_img' /></div>
            <div><img src={redux} alt="skill" className='skill_img' /></div>
        </div>
          
        
        </div>

        <div className='skill_div'>
        <p>Tool</p>
       
        <div className='skill'>
            <div><img src={material} alt="skill" className='skill_img'/></div>
            <div><img src={firebase} alt="skill" className='skill_img'/></div>
            <div><img src={styles} alt="skill" className='skill_img'/></div>
       </div>
        
        </div>
    </div>
  )
}

export default About