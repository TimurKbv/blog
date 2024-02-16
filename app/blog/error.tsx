'use client'

import React from 'react'

const ErrorWrapper = ({error}: {error: Error}) => {
  return <h1 className=' text-3xl font-extrabold text-center'> Ooops! {error.message} </h1>
}

export default ErrorWrapper
