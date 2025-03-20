import React from 'react';

const Hero = () => {
  return (
    <main className="flex items-center justify-center p-10 h-screen -mb-18">
      <div className="flex items-center justify-between w-full max-w-6xl">
        {/* Left Side: Text + Buttons + Shop Logo */}
        <div className="flex flex-col">
        <h1 className="font-extrabold text-7xl leading-tight max-w-md">
  YOUR FEET DESERVE THE BEST
</h1>


<p className="font-semibold text-gray-500 max-w-sm">
  YOUR FEET DESERVE THE BEST, AND WE’RE HERE TO HELP YOU WITH OUR SHOES.  
  YOUR FEET DESERVE THE BEST, AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
</p>


          {/* Buttons */}
          <div className="mt-4 flex gap-4">
            <button className="px-3 py-1 bg-red-600 text-white">Shop Now</button>
            <button className="px-3 py-1 bg-transparent text-gray-600 border border-black">
              Category
            </button>
          </div>

          {/* Shop Logo */}
          <div className="mt-6">
            <img src="/images/shop.png" alt="shopImg" className="h-10" />
          </div>
        </div>

        {/* Right Side: Shoe Image */}
        <div className="flex justify-end ">
          <img src="/images/shoe_image.png" alt="shoeImg" className="w-[400px]" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
