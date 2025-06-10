import { ThemeToggle } from '@/components/ThemeToggle'
import React from 'react'

const HomePage = () => {
  return (
    <main className='backgroundLight dark:backgroundDark min-h-[300vh]'>
      <ThemeToggle />
      HomePage</main>
  )
}

export default HomePage