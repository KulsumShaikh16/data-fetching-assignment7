import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4 bg-[url("/bg-img.jpg")] bg-cover bg-center bg-transparent '>
      <h2 className='text-white text-[20px] text-bold tracking-wide'>Welcome to Data Fetching App</h2>
      <Link href="/client-side"> <h1 className='text-2xl font-extrabold border rounded-md p-4 text-white'>Client side rendering</h1></Link>
     
      <Link href="/server-side"> <h1 className='text-2xl font-extrabold border rounded-md p-4 text-white'>Server side rendering</h1></Link>
    </div>
  )
}

export default page
