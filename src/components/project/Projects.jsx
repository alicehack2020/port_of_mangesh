import React from 'react'
import "./Projects.css"
import projectone from "../../img/projectone.png"
import mama from "../../img/mamearth.png"
import steplogo from "../../img/step1.png"
import coastal1 from "../../img/coastalmind.png"
import projectpicmobilesec from "../../img/projectpicmobilesec.png"
import projectpicmobile from "../../img/projectpicmobile.png"
import show from "../../img/show.png"
import live from "../../img/live.png"
const Projects = () => {

  

  var list=[
     
    {
      id:1,
      project_name:"mamaearth clone",
      project_image:projectpicmobile,
      project_code:"https://github.com/alicehack2020/mama-earth-march-2022",
      project_live:"https://mamaearth.netlify.app/",
      project_info:"We have to clone Mamaearth. A website providing toxin-free, natural baby care, skincare, haircare products, and more for babies and everyone else",
      view_code:"View Code",
      live_demo:"Live Preview",  
      features_1:"1.Home Page",
      features_2:"2.Sign-in/Sign-up",
      features_3:"3.Product Pages",
      features_4:"4.A user can sign in or sign up.",
      features_5:"5.User Profile",
      features_6:"6.Cart and Payment Page",

      tech:"Tech Stack : HTML | CSS | Javascript",
      responsibilities1:" 1. Built user profile page",
      responsibilities2:" 2. Get user data from local storage.",
      responsibilities3:"A collaborative project built by a team of 4 executed in 4 days.",
          
    },
    
    {
      id:2,
      project_name:"step1 Education",
      project_image:projectpicmobilesec,
      project_code:"",
      project_live:"https://play.google.com/store/apps/details?id=com.steponeeducation.user",
      project_info:"We have to clone Mamaearth. A website providing toxin-free, natural baby care, skincare, haircare products, and more for babies and everyone else",
      view_code:"This application is real project can't share code",
      live_demo:"Live Preview",

     
  
      tech:"Tech Stack : HTML | CSS | Javascript|Java|Firebase|One Signal ",
      features_1:"1.Login, Register, Forgot Password",
      features_2:"2.Online Course",
      features_3:"3.Online Exam",
      features_4:"4.Razorpay Payment gateway",
      features_5:"5.Firebase notification",
      features_6:"6.Online Notes",
       
      responsibilities1:" Build backend and Mobile Desing,Notification Integration ",
      responsibilities2:"",
      responsibilities3:"A collaborative   built by a team of 3 executed in 3 months.",
          
    },
    {
      id:3,
      project_name:"Coastal Mind",
      project_image:projectpicmobilesec,
      project_code:"",
      project_live:"https://play.google.com/store/apps/details?id=com.akarz",
      project_info:"This app is built for 1st to 10th standard students who want to learn at a low cost. This app content semi, English, Marathi medium students content",
      view_code:"This application is real project can't share code",
      live_demo:"Live Preview",

     
  
      tech:"Tech Stack : HTML | CSS | Javascript|Java|Firebase|One Signal",
      features_1:" 1. User Authentification",
      features_2:" 2. User-Friendly Ui",
      features_3:" 3. Student Can learn online at a low cost",
      features_4:" 4. Razorpay Payment gateway",
      features_5:" 5.Online Exam,Video Lectures",
      features_6:"use full for 1st to 10th standards student",
       
      responsibilities1:"payment gateway Integration,Deployment on playstore",
      responsibilities2:"",
      responsibilities3:"A  project built by a team of 3 executed in 3 months.",
          
    }


    
    
]


  return (
    <div className='project_main' id='Project'>
        <div className='project_heading'> 
            <h1>Recent Projects</h1>
            <div className='View_More'>View More</div>
        </div>

        <div className='project_list'>
{
list.map((ele)=>{
  return( <div>
              <h3 className='p_title'>{ele.project_name}</h3>
              <div className='projet_main_image' id='p_image'>
                <img src={ele.project_image} alt="projectone"  className='project_image'/>
              </div>
               
              <div className='project_info' id='p_info'>
               
              <p className='ptitle'>{ele.project_info}</p>
              <span>feature</span>
              <ul>
                <li>{ele.features_1+" || "+ ele.features_2 }</li>
                <li>{ele.features_3 +"|| "+ele.features_4}</li>
                <li>{ele.features_5+" || "+ ele.features_6}</li>
               
              </ul>
              <span>{ele.tech}</span><br />
              <span>Areas of responsibility:</span>
              <ul>
                <li>{ele.responsibilities1+"||"+ele.responsibilities2}</li>
                
                <li>{ele.responsibilities3}</li>
               </ul>

              </div>

              <div className='flex project_view'>

                <a href={ele.project_code} target="_blank" rel="noopener noreferrer">
                <div className='flex'>
                    <img src={show} alt="" className='p_icon' />
                    <p>{ele.view_code}</p>
                  </div>
                </a>

                <a href={ele.project_live} target="_blank" rel="noopener noreferrer" 
                onClick={()=>{
                  
                }}>
                  <div className='flex'>
                    <img src={live} alt="" className='p_icon' />
                    <p>{ele.live_demo}</p>
                  </div>
                </a>

                <div>
                  <div className='flex more_infos' >
                    <img src={live} alt="" className='p_icon' />
                    <p>More Info</p>
                  </div>
                </div>

              </div>
          </div>
          )
})
}
         

         

        </div>

    </div>
  )
}




export default Projects