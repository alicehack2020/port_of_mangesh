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
    <h2>Skills</h2>
        <div className='main_skills2'>
            <div><img src={js} alt="skill"/></div>
            <div><img src={htmls} alt="skill"/></div>
            <div><img src={node} alt="skill"/></div>
            <div><img src={rdius} alt="skill"/></div>
            <div><img src={reactjs} alt="skill"/></div>
            <div><img src={mongo} alt="skill"/></div>
            <div><img src={androida} alt="skill"/></div>
        </div>
    </div>
  )
}

export default SkillAdvace