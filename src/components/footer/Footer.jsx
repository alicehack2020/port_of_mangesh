import React from 'react'
import facebook from "../../img/facebook.png"
import github from "../../img/github.png"
import mobile from "../../img/mobile.png"
import twitter from "../../img/twitter.png"
import whatsapp from "../../img/whatsapp.png"
import linkdlin from "../../img/linkdlin.png"
import gmail from "../../img/gmail.png"
import "./Footer.css"
// import { useState } from "react";

const Footer = () => {
  // const [share, setShare] = useState(false);
	// const [modal, setModal] = useState(false);


  // const toggleShare = () => {
	// 	setShare(!share);
	// };

	// const toggleModal = () => {
	// 	setModal(!modal);
	// };

  // if (share) {
	// 	document.body.classList.add("active-modal");
	// } else {
	// 	document.body.classList.remove("active-modal");
	// }

	// if (modal) {
	// 	document.body.classList.add("active-modal");
	// } else {
	// 	document.body.classList.remove("active-modal");
	// }


  return (
     <div className='f_main'>
     <div>
       <h1 className='l_cpnnect'>Let's Connect</h1>
     </div>
      
      <div className='footer_main'>
        <a href="https://github.com/alicehack2020"><img src={github} alt=""/></a>
        <a href="https://www.linkedin.com/in/mangesh-pandit-392846153/"><img src={linkdlin} alt="" /></a>
        <a href="mailto:mangesh2042@gmail.com?subject=Me&body=Hello!"><img src={gmail} alt="" /></a>
        <a href="https://m.facebook.com/mangesh2042"><img src={facebook} alt="" /></a>
        <a href="https://twitter.com/Mangesh41559708"><img src={twitter} alt="" /></a>
        <a href="//api.whatsapp.com/send?phone=917775826975&text=Hello"><img src={whatsapp} alt="" /></a>
        <a href="tel:+91777826975"><img src={mobile} alt="" /></a>
    </div>

    


    <div className='footer_main_mobile'>
        <a href="https://github.com/alicehack2020"><img src={github} alt=""/></a>
        <a href="https://www.linkedin.com/in/mangesh-pandit-392846153/"><img src={linkdlin} alt="" /></a>
        <a href="mailto:mangesh2042@gmail.com?subject=Me&body=Hello!"><img src={gmail} alt="" /></a>
        <a href="tel:+91777826975"><img src={mobile} alt="" /></a>
    </div>


      <div className='backtop'>
       <a href="#top"><p>Back to Top</p></a>
        <img src="" alt="" />
      </div>
     </div>
   
  )
}

export default Footer