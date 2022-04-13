import React from 'react'
import "./SkillAdvace.css"
import androida from "../img/newicon/androida.png"
import js from "../img/newicon/js.png"
import node from "../img/newicon/node.png"
import htmls from "../img/newicon/htmls.png"
import rdius from "../img/newicon/redux.png"
import reactjs from "../img/newicon/reactjs.png"
import mongo from "../img/newicon/mongodb.png"
const SkillAdvace = () => {
  return (
    <div className='mails2' id='skillsadvance2'>
    <h1 className='skill_heading'>Skills</h1>
        <div className='main_skills2'>
            <div><img src={js} alt="skill"/><p>JavaScript</p></div>
            <div><img src={htmls} alt="skill"/><p>HTML</p></div>
            <div><img src={node} alt="skill"/><p>Node.js</p></div>
            <div><img src={rdius} alt="skill"/><p>Redux</p></div>
            <div><img src={reactjs} alt="skill"/><p>React js</p></div>
            <div><img src={mongo} alt="skill"/><p>MongoDB</p></div>
            <div><img src={androida} alt="skill"/><p>Android</p></div>
        </div>
    </div>
  )
}

export default SkillAdvace