import React from 'react'
import logo from '../assets/logo.png'

export default function Logo() {
  return (
    <div className="flex items-center">
      <img src={logo} alt="LSA Logo" className="h-12 w-18" />
    </div>
  )
}