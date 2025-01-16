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

    const section = document.getElementById(item.toLowerCase())
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

  const menuItems = ['Home', 'About', 'Program', 'Gallery', 'Patner', 'News', 'Contact Us']

  return (
    <div className="fixed w-full text-white z-50">
      <nav className={`max-w-full mx-0 px-4 py-3 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-sm bg-black/50' : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center">
          <div className="w-[200px]">
            <Logo />
          </div>
          
          <ul className="flex gap-8">
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

          <div className="flex gap-6 text-xl w-[200px] justify-end">
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
      </nav>
    </div>
  )
}
