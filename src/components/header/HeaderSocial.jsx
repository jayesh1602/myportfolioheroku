import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa'

export const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/jayesh-s-patil-89b3871bb/' target="_blank" className='header__social'><BsLinkedin/></a>
        <a href='https://github.com/jayesh1602/' target="_blank" className='header__social'><BsGithub/></a>
        <a href='https://www.instagram.com/jayeshspatil1602/' target="_blank" className='header__social'><FaInstagramSquare/></a>
    </div>
  )
}
