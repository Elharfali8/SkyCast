'use client'
import React, { useState } from 'react'
import Navbar from './Navbar'
import LinksDropdown from './LinksDropdown'

const Header = () => {
    const [navIsOpen, setNavIsOpen] = useState<boolean>(false)

    const handleNavToggle = () => {
        setNavIsOpen(!navIsOpen)
    }
  return (
      <>
          <Navbar navIsOpen={navIsOpen} handleNavToggle={handleNavToggle} />
          <div className='container main-container'>
          <LinksDropdown navIsOpen={navIsOpen} handleNavToggle={handleNavToggle} />
          </div>
      </>
  )
}

export default Header