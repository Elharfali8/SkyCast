import React from 'react'
import { Logo } from '../Logo'
import NavbarSearchInput from '../NavbarSearchInput'
import { FaBars, FaTimes } from "react-icons/fa";

import { Button } from '../ui/button'
import Link from 'next/link'

type NavbarProps = {
  navIsOpen: boolean;
  handleNavToggle: () => void;
}


const Navbar = ({navIsOpen, handleNavToggle}:NavbarProps) => {
  return (
      <nav className=' bg-white/10  backdrop-blur container main-container sticky top-2  left-2 lg:left-0 right-2 lg:right-0 z-[99]  py-4 shadow rounded-lg  '>
          <div className='flex items-center justify-between px-2 lg:px-4'>
            <Logo />
            <div className='flex items-center gap-x-6'>
          <div className='hidden lg:flex items-center gap-x-4'>
          <NavbarSearchInput />
                </div>
                <div className='hidden lg:flex items-center gap-x-2'>
                    <Button asChild>
                        <Link href='/login' className='text-sm'>Login</Link>
                    </Button>
                        <Button asChild variant='secondary'>
                        <Link href='/signup' className='text-sm'>Sign Up</Link>
                        </Button>
                </div>
              </div>
        <Button size='icon' className='lg:hidden cursor-pointer' variant='secondary' onClick={handleNavToggle}>
          {navIsOpen ? <FaTimes className='h-5 w-5' /> : <FaBars className='h-5 w-5' />}
                
              </Button>
          </div>
    </nav>
  )
}

export default Navbar