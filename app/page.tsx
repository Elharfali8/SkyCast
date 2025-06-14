import Hero from '@/components/Hero'
import { ThemeToggle } from '@/components/ThemeToggle'
import React from 'react'

const HomePage = () => {
  return (
    <main className='backgroundLight dark:backgroundDark '>
      <div className="container main-container grid place-items-center min-h-[calc(100vh-68px)]">
      <Hero />
      </div>
    </main>
  )
}

export default HomePage