import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const data = [
  {
    id: 1, 
    image : IMG1,  
    title: 'Zero Gravity' , 
    github: 'https://github.com' , 
    demo: 'https://dribbble.com/shots/17907372-Zero-Gravity'
  },
  {
    id: 2, 
    image : IMG2,  
    title: 'GitHub - Dark mode colors', 
    github: 'https://github.com' , 
    demo: 'https://dribbble.com/shots/15487845-GitHub-Dark-mode-colors'
  },
  {
    id: 3, 
    image : IMG3,  
    title: 'Crypto Web!' , 
    github: 'https://github.com' , 
    demo: 'https://dribbble.com/shots/17905027-Crypto-Web '
  },
  {
    id: 4, 
    image : IMG4,  
    title: 'Ethereum Web' , 
    github: 'https://github.com' , 
    demo: 'https://dribbble.com/shots/17760205-Ethereum-Web '
  },
  {
    id: 5, 
    image : IMG5,  
    title: 'Nft Web' , 
    github: 'https://github.com' , 
    demo: 'https://dribbble.com/shots/17745852-Nft-Web '
  },
  {
    id: 6, 
    image : IMG6,  
    title: 'Apollo icon' , 
    github: 'https://github.com' , 
    demo: 'https://dribbble.com/shots/17900422-Apollo-icon '
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