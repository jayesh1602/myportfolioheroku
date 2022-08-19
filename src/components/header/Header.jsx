import React from 'react'
import { CTA } from './CTA'
import ME from '../../assets/me.png'
import { HeaderSocial } from './HeaderSocial'
import './header.css'
import Boy from "../../assets/Boy_online.png";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Jayesh S. Patil</h1>
        <h5 className="text-light typewriter">Full-Stack Developer and B.E Student</h5>
        <CTA/>
        <HeaderSocial/>
        <div className='me'>

          <img src={Boy}></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
