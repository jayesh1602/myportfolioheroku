import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import health from "../../assets/health.png"


export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={health} alt="title 1" />
          </div>
          <h3><span className='portfolio__title'>Title : </span> Decentralised Health Record management System </h3>
          <p>
            <ul>
              <li>this project solves the problem of storing the health record of all the patients</li>
              <li>we dont have to bring our files every time to hospital's</li>
            </ul>
          </p>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className='btn btn-port'>Github</a>
            <a href="https://github.com" target="_blank" className='btn btn-primary btn-port'>Live Demo</a>

          </div>
          
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="title 1" />

          </div>
          <h3><span>Title : </span>This is a portfolio item title</h3>
          <hr />
          <p >this is good project discrip. and also it contains all types of products..</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className='btn btn-port'>Github</a>
            <a href="https://github.com" target="_blank" className='btn btn-primary btn-port'>Live Demo</a>

          </div>
          
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="title 1" />

          </div>
          <h3><span>Title : </span> This is a portfolio item title</h3>
          <p>this is good project discrip. and also it contains all types of products..</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target="_blank" className='btn btn-port'>Github</a>
            <a href="https://github.com" target="_blank" className='btn btn-primary btn-port'>Live Demo</a>

          </div>
          
        </article>
      </div>
    </section>
  )
}
