import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"
import data from "../../db/data"

const Experience = () => {

  const arrayOfFrontEnd = data.dataFrontend.map((value)=>{
     return (
         <article className='experience_details' key={value.title}>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>{value.title}</h4>
                <small className='text-light'>{value.body}</small>
              </div>
            </article>
     )
   }
  )

  const arrayOfBackEnd = data.dataBackEnd.map((value)=>{
    return (
        <article className='experience_details' key={value.title}>
             <BsPatchCheckFill className='experience_details-icon'/>
             <div>
                <h4>{value.title}</h4>
                <small className='text-light'>{value.body}</  small>
             </div>
           </article>
    )
  }
 )

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {arrayOfFrontEnd}
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
            <div className="experience_content">
               {arrayOfBackEnd}
            </div>
        </div>
      </div>

    </section>
  )
}

export default Experience