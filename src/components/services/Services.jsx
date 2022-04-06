import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"
import data from  "../../db/data"

const Services = () => {

  const arrayOfList = data.lorems.map((value,index)=>{
    return (
        <li key={index}>
          <BiCheck className='service_list-icon'/>
          <p>{value}</p>
        </li>
    )
  })

  const arrayOfArticles = data.title.map((value,index)=>{
    return (
        <article className='service' key={index}>
          <div className='service_head'>
            <h3>{value}</h3>
          </div>
          <ul className='service_list'>
            {arrayOfList}
          </ul>
        </article>
    )
  })

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        
        {arrayOfArticles}

      </div>

    </section>
  )
}

export default Services