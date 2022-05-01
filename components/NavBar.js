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
            <div className="w-96 h-10 hidden relative md:block">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input type="text" className="font-normal block p-2 pl-10 w-full text-[#88898E] bg-[#F2F2F3] rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Search" />
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