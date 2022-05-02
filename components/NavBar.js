import React from 'react'
import Image from 'next/image'
import { FaSortDown, FaRegBell } from "react-icons/fa"

function NavBar() {
  return (
    <div className='container pl-5 md:px-6 shadow max-w-full'>
      <nav className="w-full h-16 flex items-center">
        <div className='grid grid-cols-2 gap-4 items-center'>
          <div className='grid grid-cols-4 lg:grid-cols-3  items-center'>
            <div className='flex p-2 cursor-pointer w-24 h-10'>
              <h1 className='font-medium text-sm'>
                Starbucks
              </h1>
              <FaSortDown className='ml-1' />
            </div>
            <div className="w-96 h-10 hidden relative md:block md:pl-1 lg:pl-0">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <Image src='/header/search.svg' alt='search' height={19} width={19}/>
              </div>
              <input type="text" className="font-normal block p-2 pl-10 w-full text-[#88898E] bg-[#F2F2F3] rounded-lg border border-gray-300" placeholder="Search" />
            </div>
          </div>
          <div className='flex justify-end space-x-4 items-center'>
            <FaRegBell />
            <div className='w-8 h-8 cursor-pointer rounded-full relative'>
              <Image
                src='/header/dp.png'
                alt="sidebar placeholder icon" layout='fill'
              />
            </div>
            <div className='flex justify-center cursor-pointer p-2 w-24 h-10'>
              <h1 className='font-medium text-sm'>
                John Doe
              </h1>
              <FaSortDown className='ml-1' />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar