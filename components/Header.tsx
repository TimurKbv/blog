import React from 'react'
import Navigation from './Navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

const Header = () => {
  return (
    <header className='w-full h-[10vh] flex justify-evenly items-center'>
        <Navigation navLinks={navItems} />
    </header>
  )
}

export default Header
