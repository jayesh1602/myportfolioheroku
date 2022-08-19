import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa'

export const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank" className='header__social'><BsLinkedin/></a>
        <a href='https://github.com' target="_blank" className='header__social'><BsGithub/></a>
        <a href='https://instagram.com' target="_blank" className='header__social'><FaInstagramSquare/></a>
    </div>
  )
}
