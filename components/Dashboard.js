import React from 'react'
import Image from 'next/image'
import { FaArrowDown } from "react-icons/fa"

function Dashboard() {
  return (
    <div>
      <div className='h-20 shadow-sm flex items-center'>
        <h1 className='font-bold text-xl ml-6'>Inventory</h1>
      </div>
      <div className='m-1 md:m-6 bg-white rounded shadow'>
        <div className='p-6'>
          <div className="w-full md:w-96 h-10 relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" className="font-normal block p-2 pl-10 w-full text-[#88898E] bg-[#F2F2F3] rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Search" />
          </div>
        </div>
        <div className=''>
          <table className="table-auto w-full">
            <thead className='bg-[#FDF4ED]'>
              <tr className='h-10 text-center'>
                <th>
                  <input type="checkbox" />
                </th>
                <th className='text-sm font-medium'>
                  <span className='mr-1'>Date Updated</span>
                  <Image height={11} width={11} src='/table/down-arrow.svg' alt='down-arrow' />
                </th>
                <th className='text-sm font-medium'>
                  <span className='mr-1'>Title</span>
                  <Image height={11} width={11} src='/table/up-down.svg' alt='up-down' />
                </th>
                <th className='text-sm font-medium'>Details</th>
                <th className='text-sm font-medium'>Status</th>
                <th className='text-sm font-medium'>Quantity</th>
                <th className='text-sm font-medium'>Unite Price</th>
                <th className='text-sm font-medium'>
                  <span className='mr-1'>Amount</span>
                  <Image height={11} width={11} src='/table/up-down.svg' alt='up-down' />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-center h-16 text-base font-normal'>
                <td>
                  <input type="checkbox" />
                </td>
                <td >11 Nov 2021</td>
                <td >Hammer</td>
                <td >This is a hammer to do work with</td>
                <td >Alright</td>
                <td >200/300</td>
                <td >$10</td>
                <td >$2000.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

// flex items-center h-10 justify-evenly