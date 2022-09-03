import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'

export const App = () => {
  return (
    <>
    <Header/>
    <About/>
    <Services/>
    <Nav/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    </>
  )
}
export default App