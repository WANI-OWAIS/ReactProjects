import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-between h-72px items-center px-6 py-2'>
        <img src="/images/brand_logo.png" alt="logo" />

        <ul className='flex justify-between gap-4'>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>

        <button className='px-3 py-1 bg-red-700 text-white'>Login</button>
      </div>

    </nav>
  )
}

export default Navbar