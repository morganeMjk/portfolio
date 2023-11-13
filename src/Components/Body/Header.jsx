import React from 'react'
import Title from './Header/Title'
import Background from './../../Assets/Background/background.mp4'
import Navbar from '../Navbar'

export default function Header() {
  return (
    <header className='header'>
      <div className='header__content'>
        <Navbar />
        <Title />
      </div>
      <video src={Background} autoPlay loop muted className='header__video'></video>
    </header>
  )
}