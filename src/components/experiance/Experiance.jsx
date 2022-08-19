import React from 'react'
import './experiance.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import Html from '../../assets/html.png'
import Css from '../../assets/css3.png'
import Tailwind from '../../assets/css3.png'

import Mongo from '../../assets/mongodb.png'
import Node from '../../assets/node.png'
import Bootstrap from '../../assets/bootstrap.png'
import Reactimg from '../../assets/react.png'
import Tailwindimg from '../../assets/tailwind.png'
import Javaimg from '../../assets/java.png'
import Pythone from '../../assets/pythone.png'
import express from '../../assets/express.png'
import Cpp from '../../assets/cpp.png'





export const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What skills i have</h5>
      <h2>My Skills in Technologies</h2>
      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Frontend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              {/* <BsPatchCheckFill/> */}
              <img src={Html} className="experiance__logo"></img>
              <h4>HTML</h4>
              <small className='text-light'>Experianced</small>
            </article>
            
            <article className="experiance__details">
              {/* <BsPatchCheckFill/> */}
              <img src={Css} className="experiance__logo"></img>
              
              <h4>CSS</h4>
              <small className='text-light'>Experianced</small>
            </article>
            <article className="experiance__details">
              {/* <BsPatchCheckFill/> */}
              <img src={Tailwindimg} className="experiance__logo"></img>
              
              <h4>Tailwind-CSS</h4>
              <small className='text-light'>Experianced</small>
            </article>
            <article className="experiance__details">
              {/* <BsPatchCheckFill/> */}
              <img src={Bootstrap} className="experiance__logo"></img>

              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experiance__details">
              {/* <BsPatchCheckFill/> */}
              <img src={Reactimg} className="experiance__logo"></img>

              <h4>ReactJS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>

        </div>
        <div className="experiance__backend">
          <h3>Backend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              {/* <BsPatchCheckFill/> */}
              <img src={Node} className="experiance__logo"></img>

              <h4>NodeJS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experiance__details">
              {/* <BsPatchCheckFill/> */}
              <img src={express} className="experiance__logo"></img>

              <h4>Express</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="experiance__details">
              {/* <BsPatchCheckFill/> */}
              <img src={Mongo} className="experiance__logo"></img>

              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>

        </div>
        <div className="experiance__lang">
          <h3>Programming Languages</h3>
          <div className="experiance__content experiance__content__lang">
            <article className="experiance__details">
              {/* <BsPatchCheckFill/> */}
              <img src={Cpp} className="experiance__logo"></img>

              <h4>C++</h4>
              <small className='text-light'>Experianced</small>
            </article>
            <article className="experiance__details">
              {/* <BsPatchCheckFill/> */}
              <img src={Javaimg} className="experiance__logo"></img>

              <h4>JAVA</h4>
              <small className='text-light'>Basic</small>
            </article>
            <article className="experiance__details">
              {/* <BsPatchCheckFill/> */}
              <img src={Pythone} className="experiance__logo"></img>

              <h4>Python</h4>
              <small className='text-light'>Basic</small>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}
