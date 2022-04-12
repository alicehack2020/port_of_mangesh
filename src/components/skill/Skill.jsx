import React from 'react'
import androida from "../../img/newicon/androida.png"
import js from "../../img/newicon/js.png"
import node from "../../img/newicon/node.png"
import htmls from "../../img/newicon/htmls.png"
import rdius from "../../img/newicon/redux.png"
import reactjs from "../../img/newicon/reactjs.png"
import mongo from "../../img/newicon/mongodb.png"

// import material from "../../img/material.png"
// import firebase from "../../img/firebase.png"
// import styles from "../../img/styled.png"

import "./Skill.css"
const Skill = () => {
  return (
    <div id='skills'>
      <div className='skill_div'>
        <h2 className='skilltag'>Skill</h2>
        <div className='skill'>
            <div><img src={js} alt="skill" className='skill_img'/></div>
            <div><img src={htmls} alt="skill" className='skill_img'/></div>
            <div><img src={node} alt="skill" className='skill_img'/></div>
            <div><img src={rdius} alt="skill" className='skill_img'/></div>
            <div><img src={reactjs} alt="skill" className='skill_img' /></div>
           {/* <div><img src={sql} alt="skill" className='skill_img'/></div>
            <div><img src={next} alt="skill" className='skill_img'/></div> */}
            <div><img src={mongo} alt="skill" className='skill_img'/></div>
            <div><img src={androida} alt="skill" className='skill_img'/></div>

            {/* <div><img src={express} alt="skill" className='skill_img' /></div>
            <div><img src={nodejs} alt="skill" className='skill_img' /></div> */}
            
        </div>
          
        
        </div>
    </div>
  )
}

export default Skill