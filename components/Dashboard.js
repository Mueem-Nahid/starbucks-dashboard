import React from 'react'
import Image from 'next/image'
import { tableData } from '../utilities/tableData'
import TableRow from './TableRow'

function Dashboard() {
  return (
    <div>
      <div className='h-16 shadow-sm flex items-center'>
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
              <tr className='h-10'>
                <th className='text-left pl-5 hidden md:table-cell'>
                  <input type="checkbox" />
                </th>
                <th className='text-sm font-medium text-left hidden md:table-cell'>
                  <span className='mr-1'>Date Updated</span>
                  <Image height={11} width={11} src='/table/down-arrow.svg' alt='down-arrow' />
                </th>
                <th className='text-sm font-medium text-left pl-5 md:pl-0'>
                  <span className='mr-1'>Title</span>
                  <Image height={11} width={11} src='/table/up-down.svg' alt='up-down' />
                </th>
                <th className='text-sm font-medium text-left hidden lg:table-cell'>Details</th>
                <th className='text-sm font-medium text-left opacity-0 md:opacity-100'>Status</th>
                <th className='text-sm font-medium text-right opacity-0 lg:opacity-100'>Quantity</th>
                <th className='text-sm font-medium text-right hidden lg:table-cell'>Unite Price</th>
                <th className='text-sm font-medium text-right pr-5'>
                  <span className='mr-1'>Amount</span>
                  <Image height={11} width={11} src='/table/up-down.svg' alt='up-down' />
                </th>
              </tr>
            </thead>
            <tbody>
              {
                tableData.map(({ id, date, title, details, status, quantity, price, amount }) => (
                  <TableRow key={id} date={date} title={title} details={details} status={status} quantity={quantity} price={price} amount={amount} />
                ))
              }
            </tbody>
          </table>
        </div>
        <div className='mt-6 mx-4 pb-6 flex justify-between'>
          <div role='button' className='w-48 h-8 border border-[#B2B2B6] rounded hidden md:flex justify-between items-center p-2 shadow'>
            <span className=' text-[#88898E] text-sm font-medium'>10 Items per page</span>
            <div className='w-3.5 h-2 relative'>
              <Image layout={'fill'} src='/pagination/down-arrow.png' alt='down-arrow' />
            </div>
          </div>
          <div>
            <div className='flex gap-x-2'>
              <div role='button' className='w-40 h-8 border border-[#B2B2B6] rounded flex justify-between items-center p-2 shadow'>
                <span className=' text-[#88898E] text-sm font-medium'>Page 1 of 5</span>
                <div className='w-3.5 h-2 relative'>
                  <Image layout={'fill'} src='/pagination/down-arrow.png' alt='down-arrow' />
                </div>
              </div>
              <div role='button' className='w-10 h-8 border border-[#B2B2B6] rounded flex items-center justify-center shadow'>
                <div className='w-2 h-3.5 relative'>
                  <Image src='/pagination/left-arrow.png' alt='left-arrow' layout={'fill'} />
                </div>
              </div>
              <div role='button' className='w-10 h-8 border border-[#B2B2B6] rounded flex items-center justify-center shadow'>
                <div className='w-2 h-3.5 relative'>
                  <Image src='/pagination/right-arrow.png' alt='left-arrow' layout={'fill'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard