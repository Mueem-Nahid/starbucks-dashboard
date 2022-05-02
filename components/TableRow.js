import React from 'react'
import Image from 'next/image'

function TableRow({ id, date, title, details, status, quantity, price, amount }) {
  return (
    <tr key={id} className='h-16 text-base font-normal hover:bg-gray-100'>
      <td className='text-left pl-5 hidden md:table-cell'>
        <input type="checkbox" />
      </td>
      <td className='text-left hidden md:table-cell'>{date}</td>
      <td className='text-left pl-5 md:pl-0'>{title}</td>
      <td className='text-left hidden lg:table-cell'>{details ? details : '-'}</td>
      <td className='text-left flex items-center h-16'>
        <span className='mr-2 hidden md:block'>{status}</span>
        <Image src={`${status === 'Alright' && '/table/alright.png' || status === 'In Progress' && '/table/in-progress.png' || status === 'In Progress' && '/table/in-progress.png' || status === 'Out of Stock' && '/table/out-of-stock.png'}`} alt={status} width={8} height={8} />
      </td>
      <td className='text-right'>
        <span className='font-bold'>{quantity.split('/')[0]}</span>/
        {quantity.split('/')[1]}
      </td>
      <td className='text-right hidden lg:table-cell'>{price}</td>
      <td className='text-right pr-5'>{amount}</td>
    </tr>
  )
}

export default TableRow