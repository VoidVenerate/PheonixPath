import { useState } from 'react'
import './App.css'
import NavPage from './Pages/NavPage/NavPage.jsx'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage.jsx'
import InfoPage from './Pages/InfoPage/InfoPage.jsx'
import ServicesPage from './Pages/ServicesPage/ServicesPage.jsx'

function App() {

  return (
    <>
      <HomePage />
      <InfoPage />
      <ServicesPage />
    </>
  )
}

export default App
