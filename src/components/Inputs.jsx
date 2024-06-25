import { BiSearch, BiCurrentLocation } from 'react-icons/bi'

import React from 'react'

function Inputs() {
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
            type="text" 
            placeholder='Search for city...' 
            className='text-gray-500 text-xl p-2 font-light w-full shadow-xl 
            capitalize focus:outline-none placeholder:lowercase rounded-full'/>

            <BiSearch size={30} className=' cursor-pointer transition ease-out hover:scale-125 ' />
            <BiCurrentLocation size={30} className=' cursor-pointer transition ease-out hover:scale-125' />
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button className='text-xl font-medium transition ease-out hover:scale-125'>
                °C
            </button>
            <p className='text-2xl font-medium mx-1'>|</p>
            <button className='text-xl font-medium transition ease-out hover:scale-125'>
                °F
            </button>
        </div>
    </div>
  )
}

export default Inputs