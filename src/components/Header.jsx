import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'

export default function Header() {
  const [activeMenu, setActiveMenu] = useState('Home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Update logika deteksi section
      const sections = menuItems.map(item => {
        if (item === 'Home') return document.documentElement
        if (item === 'Contact Us') return document.getElementById('contactus')
        return document.getElementById(item.toLowerCase())
      })

      let current = 'Home'
      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section === document.documentElement ? 0 : section.offsetTop - 100
          const sectionBottom = section === document.documentElement ? window.innerHeight : sectionTop + section.offsetHeight
          
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            current = menuItems[index]
          }
        }
      })
      
      setActiveMenu(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuClick = (item) => {
    setActiveMenu(item)
    
    if (item === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const sectionId = item === 'Contact Us' ? 'contactus' : item.toLowerCase()
    const section = document.getElementById(sectionId)
    
    if (section) {
      const headerOffset = 80
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleLogoClick = () => {
    window.location.reload()
  }

  const menuItems = ['Home', 'About', 'Program', 'Gallery', 'Patner', 'News', 'Contact Us']

  return (
    <div className="fixed w-full text-white z-50">
      <nav className={`max-w-full mx-0 px-4 py-3 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-sm bg-black/50' : 'bg-transparent'
      }`}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="w-[200px] cursor-pointer" onClick={handleLogoClick}>
              <Logo />
            </div>
            
            <ul className="hidden md:flex gap-8">
              {menuItems.map((item) => (
                <li 
                  key={item}
                  className={`cursor-pointer transition-colors duration-300 ${
                    activeMenu === item ? 'text-[#9FE870]' : 'hover:text-[#9FE870]'
                  }`}
                  onClick={() => handleMenuClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="hidden md:flex gap-6 text-xl w-[200px] justify-end">
              <a href="#" className="hover:text-[#9FE870] transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#9FE870] transition-colors duration-300">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-[#9FE870] transition-colors duration-300">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
