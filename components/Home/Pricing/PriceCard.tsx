import { Separator } from '@radix-ui/react-separator';
import { Type } from 'lucide-react';
import React from 'react'

type Props = {
    price: string;
    user: string;
    type: string;
}
const PriceCard = ({price, type, user}: Props) => {
  return (
    <div className="bg-gray-950 p-8 rounded-lg text-center">
        <p className='mt-12 mb-2 text-3xl text-white font-semibold'>{type}</p>
        <p className='text-white'> Great for private individuals</p>
        <Separator className="my-8 w-full h-px bg-white opacity-20" />

        <div className='text-white font-semibold text-2xl'>
            <span className="text-4xl"> {price}</span>/mo

        </div>
        <Separator className="my-8 w-full h-px bg-white opacity-20" />
       <div className="text-gray-400 text-opacity-20 space-y-2 ">
            <p> {user} users </p>
            <p> Unlimited Projects </p>
            <p> Download Projects </p>
       </div>
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 transition-all duration-300">
            Get Started
        </button>

    </div>
  )
}

export default PriceCard