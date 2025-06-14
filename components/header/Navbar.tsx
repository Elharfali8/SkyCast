import React from 'react'
import { Logo } from '../Logo'
import NavbarSearchInput from '../NavbarSearchInput'
import { FaBars, FaTimes } from "react-icons/fa";

import { Button } from '../ui/button'
import Link from 'next/link'
import { ThemeToggle } from '../ThemeToggle';
import { links } from '@/utils/links';
import { usePathname } from 'next/navigation';


type NavbarProps = {
  navIsOpen: boolean;
  handleNavToggle: () => void;
}


const Navbar = ({ navIsOpen, handleNavToggle }: NavbarProps) => {
  const pathname = usePathname();

  return (
      <nav className=' bg-white/10  backdrop-blur container main-container sticky top-2  left-2 lg:left-0 right-2 lg:right-0 z-[99]  py-4 shadow rounded-lg  '>
          <div className='flex items-center justify-between px-2 lg:px-4'>
            <Logo />
            <div className='flex items-center gap-x-18'>
          <div className='hidden lg:flex items-center gap-x-4'>
            {links.map((link) => (
              <Link key={link.id} href={link.path} className={
                `text-lg hover:text-blue-300 font-medium transition-colors duration-300  ${pathname === link.path ? 'text-blue-500 hover:text-blue-300' : 'text-gray-700 dark:text-gray-300 hover:text-blue-300'}`
              }>
                {link.label}
              </Link>
            ))}
            
                </div>
                <div className='hidden lg:flex items-center gap-x-2'>
                    <Button asChild>
                        <Link href='/login' className='text-sm'>Login</Link>
                    </Button>
                        <Button asChild variant='secondary'>
                        <Link href='/signup' className='text-sm'>Sign Up</Link>
                        </Button>
                </div>
        
          <div className="hidden lg:grid place-items-center">
          <ThemeToggle />
        </div>
        </div>
        <div className="lg:hidden flex items-center gap-x-4">
          <ThemeToggle />
        <Button size='icon' className=' cursor-pointer' variant='secondary' onClick={handleNavToggle}>
          {navIsOpen ? <FaTimes className='h-5 w-5' /> : <FaBars className='h-5 w-5' />}
                
              </Button>
          </div>
        </div>
    </nav>
  )
}

export default Navbar