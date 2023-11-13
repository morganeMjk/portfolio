import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Body from './Components/Body';
import Contact from './Components/Contact'
import Footer from './Components/Footer'


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}