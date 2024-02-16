import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: " About | Next App"
}

const About = () => {
  return (
    <div className='w-full h-full flex justify-center'>
      <h3 className='text-2xl font-bold'>Select subitem</h3>
    </div>
  )
}

export default About
