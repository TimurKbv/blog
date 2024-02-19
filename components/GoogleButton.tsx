'use client'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const GoogleButton = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || "/profile";
  return (
    <button onClick={() => signIn('google', {callbackUrl})} className=' px-5 py-3 bg-cyan-600 text-white'>
        Sign in with Google
    </button>
  )
}

export default GoogleButton
