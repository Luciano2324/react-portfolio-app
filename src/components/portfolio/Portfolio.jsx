import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/Captura.JPG"

const data = [
  {
    id: 1, 
    image : IMG1,  
    title: 'Tenzies Game with React' , 
    github: 'https://github.com/Luciano2324/Tenzie_Game' , 
    demo: 'https://calm-spire-05534.herokuapp.com/'
  }
]

const Portfolio = () => {
  const arrayOfData = data.map(({id,image,title,github,demo})=>{
    return (
        <article className='portfolio_item' key={id}>
          <div className="portfolio_item-image">
            <img src={image} alt="iimg" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
            <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
    )
  })

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

        {arrayOfData}

      </div>
    </section>
  )
}

export default Portfolio