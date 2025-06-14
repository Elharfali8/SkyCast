
import React from 'react'
import NavbarSearchInput from '../NavbarSearchInput';
import { Button } from '../ui/button';
import Link from 'next/link';

type NavbarProps = {
    navIsOpen: boolean;
    handleNavToggle: () => void;
}

const LinksDropdown = ({navIsOpen, handleNavToggle}:NavbarProps) => {
  return (
    <div className={`lg:hidden absolute w-full max-w-[300px] p-3 bg-white/10  backdrop-blur border rounded-lg   shadow ${navIsOpen ? 'translate-x-0 opacity-100 z-[99] fixed  right-2 top-[83px] ' : ' translate-x-[-100%] right-0 top-[80px] opacity-0 z-[0]'} transition-all duration-300 ease-in-out`}>
          <NavbarSearchInput />
          <div className='mt-3 grid gap-y-2'>
          <Button asChild>
                        <Link href='/login' className='text-sm'>Login</Link>
                    </Button>
                        <Button asChild variant='secondary'>
                        <Link href='/signup' className='text-sm'>Sign Up</Link>
                        </Button>
          </div>
    </div>
  )
}

export default LinksDropdown