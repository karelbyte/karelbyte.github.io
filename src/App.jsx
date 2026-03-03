import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import CodeBackground from './components/CodeBackground'

function App() {
  return (
    <div className="min-h-screen text-white relative">
      <CodeBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
