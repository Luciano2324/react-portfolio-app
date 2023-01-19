import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/Captura.JPG"
import IMG2 from "../../assets/Captura2.jpg"
import IMG3 from "../../assets/Captura3.png";

const data = [
  {
    id: 1, 
    image : IMG1,  
    title: 'Tenzies Game with React' , 
    github: 'https://github.com/Luciano2324/Tenzie_Game' , 
    demo: 'https://react-tenzies-games.netlify.app'
  },
  {
    id: 2, 
    image : IMG2,  
    title: 'Landing Page using React' , 
    github: 'https://github.com/Luciano2324/Tenzie_Game' , 
    demo: 'https://landingpage-react-sb.netlify.app'
  },
  {
    id: 3, 
    image : IMG3,  
    title: 'Admin Dashboard using Tailwind and React' , 
    github: 'https://github.com/Luciano2324', 
    demo: 'https://lb-dashboard-react.netlify.app/'
  },
]

const Portfolio = () => {
  const arrayOfData = data.map(({id,image,title,github,demo})=>{
    return (
        <article className='portfolio_item' key={id}>
          <div className="portfolio_item-image">
            <img src={image} alt="iimg" width={150} height={150}/>
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
      <h2>Projects</h2>

      <div className="container portfolio_container">

        {arrayOfData}

      </div>
    </section>
  )
}

export default Portfolio