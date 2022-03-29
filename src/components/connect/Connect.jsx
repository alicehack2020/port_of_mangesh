import React from 'react'
import facebook from "../../img/facebook.png"
import github from "../../img/github.png"
import mobile from "../../img/mobile.png"
import twitter from "../../img/twitter.png"
import whatsapp from "../../img/whatsapp.png"
import linkdlin from "../../img/linkdlin.png"
import gmail from "../../img/gmail.png"
import "./Connect.css"
const Connect = () => {
  return (
    <div className='connect_main'>
        <a href=""><img src={github} alt="" className='github'/></a>
        <a href=""><img src={linkdlin} alt="" className='linkdlin'/></a>
        <a href=""><img src={gmail} alt="" /></a>
        <a href=""><img src={facebook} alt="" /></a>
        <a href=""><img src={twitter} alt="" /></a>
        <a href=""><img src={whatsapp} alt="" /></a>
        <a href=""><img src={mobile} alt="" /></a>
    </div>
  )
}

export default Connect