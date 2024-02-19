import { authConfig } from '@/configs/auth'
import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
    title: " Profile | Next App"
}

const Profile = async () => {
    const session = await getServerSession(authConfig)

  return (
    <div className='w-full h-full flex justify-center'>
      <h3 className='text-2xl font-bold'>Profile of {session?.user?.name} </h3>
      { session?.user?.image && <img src={session.user.image} /> }
    </div>
  )
}

export default Profile
