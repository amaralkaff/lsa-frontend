import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Hero from './components/Hero'
import Program from './components/Program'
import Gallery from './components/Gallery'
import Partners from './components/Partners'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="relative">
        <Hero />
        <div className="absolute top-0 left-0 right-0">
          <Header />
        </div>
      </div>
      <div className="mt-20">
        <About />
      </div>
      <div className="mt-32">
        <Program />
      </div>
      <div className="mt-32">
        <Gallery />
      </div>
      <div className="mt-32">
        <Partners />
      </div>
      <div className="mt-32">
        <News />
      </div>
      <div className="mt-32">
        <Contact />
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </motion.div>
  )
}

export default App