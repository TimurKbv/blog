import Link from 'next/link'
import React, { ReactNode } from 'react'

const AboutLayout = ({
    children,
}: {
    children: ReactNode
}) => {
  return (
    <div>
      <h1 className='text-3xl text-center font-extrabold'>About us</h1>
      <ul className='ml-32'>
        <li className=' hover:underline'><Link href={"/about/contacts"} >Contacts</Link></li>
        <li className=' hover:underline'><Link href={"/about/team"} >Team</Link></li>
      </ul>
      {children}
    </div>
  )
}

export default AboutLayout
