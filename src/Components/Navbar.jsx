import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SocialMedias from './Body/Header/SocialMedias'

export default function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  return (
    <nav>
      <div className={click ? "navbar active" : "navbar"} id='home'>
        <SocialMedias />
        {click ?
          <i className="fa-solid fa-xmark bubble-button" onClick={() => setClick(false)}></i>
          :
          <i className="fa-solid fa-bars bubble-button" onClick={() => setClick(true)}></i>
        }
      </div>


      <ul className={click ? "navbar__list active" : "navbar__list"}>
        <li><a href='#home' class="navbar__list__link" onClick={handleClick}><i className='fa-solid fa-house'></i></a></li>
        <li><a href="#introduction" class="navbar__list__link" onClick={handleClick}>Présentation</a></li>
        <li><a href="#skills" class="navbar__list__link" onClick={handleClick}>Technologies utilisées</a></li>
        <li><a href="#experiences" class="navbar__list__link" onClick={handleClick}>Mon parcours</a></li>
        <li><a href="#projects" class="navbar__list__link" onClick={handleClick}>Mes projets</a></li>
        <li><Link to="/contact" class="navbar__list__link" onClick={handleClick}>Contact</Link></li>
      </ul>
    </nav>
  )
}