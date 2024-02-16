import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-[10vh] flex justify-evenly items-center'>
        <Link href="/" >Home</Link>
        <Link href="/blog" >Blog</Link>
        <Link href="/about" >About</Link>
    </header>
  )
}

export default Header
