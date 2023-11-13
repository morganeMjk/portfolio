import React from 'react'
import Introduction from './Main/Introduction'
import Experiences from './Main/Experiences'
import Skills from './Main/Skills'
import Projects from './Main/Projects'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <main>
      <div className='main'>
        <Introduction />
        <Skills />
        <Experiences />
        <Projects />
        <div className='contact-message'>
          <Link to="/contact" className='contact-button'>Contactez moi</Link>
          <p>N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.</p>
        </div>
      </div>
    </main>
  )
}
