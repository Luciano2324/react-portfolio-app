import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {ImStackoverflow} from "react-icons/im"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/luciano-barrabino-913069213/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/Luciano2324" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://stackoverflow.com/users/17986562/luciano-barrabino" target="_blank" rel="noreferrer"><ImStackoverflow /></a>
    </div>
  )
}

export default HeaderSocials