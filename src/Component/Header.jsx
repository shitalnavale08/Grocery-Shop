import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-rose-300 border border-b-purple-500 py-3 px-5 flex item-center justify-between'>
        <Link to='/'>LOGO</Link>
        <nav className='flex items-center gap-10'>
            <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link>
            <Link to='/checkout' className='bg-gray-500  text-white py-2 px-5 rounded-xl'>Checkout</Link>
        </nav>
    </div>
  )
}

export default Header