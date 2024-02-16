import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-[10vh] flex justify-evenly items-center'>
        <Link href="/" className='hover:underline' >Home</Link>
        <Link href="/blog" className='hover:underline'>Blog</Link>
        <Link href="/about" className='hover:underline'>About</Link>
    </header>
  )
}

export default Header
