import React from 'react'

const Footer = () => {
  return (
   <div className='pt-1 pb-3 bg-gray-950 text-white justify-right'>
        <div className='pt-16 pb-16 px-16 lg:px-16 bg-gradient-to-tl from-[#0f172a] via-[#1e293b] to-purple-950 rounded-t-2xl 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[98%] mx-auto border-b-2 border-gray-700 space-x-6 sm:space-x-0 items'>

            <div>
                <h1 className='text-2xl font-bold mb-4 pr-5'>We are dedicated to providing the best AI image generation experience.</h1>
            </div>
            <div>
                <h1 className='text-3xl font-bold mb-4'>Address</h1>
                <p className='text-1xl opacity-60'>Bulacan</p>
                <p className='text-1xl opacity-60'>Philippines </p>
            </div>
            <div className='space-y-2'>
                <h1 className='text-3xl font-bold mb-4'>Contact</h1>
                <p className='text-sm text-bold opacity-60'>Email: </p>
                <p className='text-2xl opacity-60'>givunuj.dleru@gmail.com</p>
                <p className='text-sm text-bold opacity-60'>Phone </p>
                <p className='text-2xl opacity-60'>(+63) 000 000 0000 </p>
            </div>
        </div>
        <div className='text-center pt-4 pb-4 text-gray-400 text-sm'>
            &copy; {new Date().getFullYear()} AI Image Generator. All rights reserved.
        </div>
   </div>
  )
}

export default Footer