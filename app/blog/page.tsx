import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })

    if (!response.ok) throw new Error('Unable to fetch posts')

    return response.json()
}

export const metadata: Metadata = {
    title: " Blog | Next App"
}

const Blog = async () => {
    const posts = await getData()

  return (
    <>
      <h1 className='text-3xl font-extrabold text-center'>Blog Page</h1>
        <ul>
            { posts.map((post: any) => (
                <li key={post.id} className='hover:underline' > 
                    <Link href={`/blog/${post.id}`} > { post.title } </Link>
                </li>
            )) }
        </ul>
    </>
  )
}

export default Blog
