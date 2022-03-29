import React from 'react'
import "./Projects.css"
// import projectone from "../../img/projectone.png"
import projectpicmobile from "../../img/projectpicmobile.png"
import projectpicmobilesec from "../../img/projectpicmobilesec.png"
import show from "../../img/show.png"
import live from "../../img/live.png"
const Projects = () => {
  return (
    <div className='project_main'>
        <div className='project_heading'> 
            <h1>Recent Projects</h1>
            <div className='View_More'>View More</div>
        </div>

        <div className='project_list'>

          <div>
            <h3 className='p_title'>mamaearth clone</h3>
            <div><img src={projectpicmobile} alt="projectone"  className='project_image'/></div>
            <div className='flex project_view'>
              <div className='flex'>
                <img src={show} alt="" className='p_icon' />
                <p>View Code</p>
              </div>
              <div className='flex'>
                <img src={live} alt="" className='p_icon' />
                <p>Live Preview</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className='p_title'>Udemy clone</h3>
            <div><img src={projectpicmobilesec} alt="projectone"  className='project_image'/></div>
            <div className='flex project_view'>
              <div className='flex'>
                <img src={show} alt="" className='p_icon' />
                <p>View Code</p>
              </div>
              <div className='flex'>
                <img src={live} alt="" className='p_icon' />
                <p>Live Preview</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className='p_title'>mamaearth clone</h3>
            <div><img src={projectpicmobile} alt="projectone"  className='project_image'/></div>
            <div className='flex project_view'>
              <div className='flex'>
                <img src={show} alt="" className='p_icon' />
                <p>View Code</p>
              </div>
              <div className='flex'>
                <img src={live} alt="" className='p_icon' />
                <p>Live Preview</p>
              </div>
            </div>
          </div>
          

        </div>

    </div>
  )
}

export default Projects