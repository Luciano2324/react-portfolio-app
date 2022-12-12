import React from 'react'
import "./footer.css"
import {FaFacebook} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#top" className='footer_logo'>Luciano</a>

      <ul className='permalinks'>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="http://facebook.com"><FaFacebook /></a>
        <a href="http://instagram.com"><FiInstagram /></a>
        <a href="http://twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; LUCIANO BARRABINO. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer