import React from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon, ShoppingBagIcon,ShoppingCartIcon } from 'lucide-react'

export default function NavBar() {
  return (
    <div className='flex items-center justify-between px-4 py-2 bg-indigo-400'>
      <h1 className='text-3xl font-bold pl-2'>NexaCart</h1>
      <ol className='flex items-center justify-center mx-2 font-semibold gap-x-1.5'>
        <li className='active:text-red-600'><Link to="/" ><span className='flex gap-0.5'><HomeIcon/>Home</span></Link></li>
        <li className='active:text-red-600'><Link to="/products" ><span className='flex gap-0.5'><ShoppingBagIcon/>Products</span></Link></li>
         <li className='active:text-red-600'><Link to="/cart" ><span className='flex gap-0.5'><ShoppingCartIcon/>Cart</span></Link></li>
      </ol>
    </div>
  )
}
