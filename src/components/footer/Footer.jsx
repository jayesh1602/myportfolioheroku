import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'


export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Footer</a>
      <ul className='permalinks'>
        <li ><a href='#'>Home</a></li>
        <li ><a href='#about'>About</a></li>
        <li ><a href='#experiance'>Skills</a></li>
        <li ><a href='#portfolio'>Portfolio</a></li>
        {/* <li ><a href='#testimonial'>Testimonial</a></li> */}
        <li ><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__social">
        <a href='https://www.instagram.com/jayeshspatil1602/' target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
        <a href='https://www.linkedin.com/in/jayesh-s-patil-89b3871bb/' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/jayesh1602/' target="_blank" rel="noopener noreferrer"><BsGithub/></a>

      </div>
      <div className="footer__copyright">
        <small> Love ❤ from Jayesh Patil</small>
      </div>
      
    </footer>
  )
}
