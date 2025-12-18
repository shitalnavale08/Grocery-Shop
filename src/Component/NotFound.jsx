import React from 'react'

const NotFound = () => {
  return (
    <div className='text-5xl text-white font-extrabold up h-screen w-full bg-purple-600 flex items justify-center flex-col'>
        <h1>404</h1>
        <p className='text-lg'>Page Not Found</p>
        <Link to='/'>Go Back</Link>
        
        </div>
  )
}

export default NotFound