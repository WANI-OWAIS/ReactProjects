import React from 'react'

const Hero = () => {
  return (
    <main className='flex items-center justify-center h-screen'>
        <div className='flex flex-col gap-2 '>

            {/* heading and paragraph */}
            <h1 className='font-extrabold text-7xl leading-none max-w-md'>YOUR FEET DESERVE THE BEST</h1>

            <p className='font-semibold text-gray-500 max-w-sm'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            {/* buttons */}
            <div className='flex gap-5 mt-4'>
             <button className='px-3 py-1 bg-red-600 text-white'>Shop Now</button>
             <button className='px-3 py-1 bg-transparent text-gray-600 border border-black'>Category</button>
            </div>

            {/* shoppinglogo */}
            <div className='mt-5'>
                <img src="/images/shop.png" alt="shopping logo" />
                </div>   
        </div>
         {/* sideimage */}
         <div className='flex justify-end'>
              <img src="/images/shoe_image.png" alt="shoeimg" />  
            </div>
    </main>
  )
}

export default Hero