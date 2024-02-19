import GoogleButton from '@/components/GoogleButton'
import SignInForm from '@/components/SignInForm'
import React from 'react'

const SignIn = async () => {
  return (
    <div className=' w-fit mx-auto flex flex-col items-center gap-7 mt-20'>
      <h1 className=' text-3xl font-extrabold'>SignIn</h1>
      <GoogleButton />
      <div><strong>or</strong></div>
      <SignInForm />
    </div>
  )
}

export default SignIn
