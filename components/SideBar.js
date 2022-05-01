import React, { useState } from 'react'
import Image from 'next/image'
import Dashboard from './Dashboard'

const sideBarOptions = [
    {
        id: 1,
        src: '/sidebar/dashboard.png',
        name: 'Dashboard'
    },
    {
        id: 2,
        src: '/sidebar/inventory.png',
        name: 'Inventory'
    },
    {
        id: 3,
        src: '/sidebar/documents.png',
        name: 'Documents'
    },
    {
        id: 4,
        src: '/sidebar/settings.png',
        name: 'Settings'
    }
]

function SideBar() {
    const [activeTab, setActiveTab] = useState(2)
    const handleActiveTab = (id) => {
        setActiveTab(id)
    }
    return (
        <div className='flex flex-col-reverse md:flex-row'>
            <div className='w-full md:w-20 lg:w-60 md:h-screen bg-white md:bg-[#E5E5E6] text-[#6B6C72] font-medium text-sm shadow'>
                <div className='m-5 flex flex-row justify-between md:flex-col items-center p-1'>
                    {
                        sideBarOptions.map((option) => (
                            <div onClick={() => handleActiveTab(option?.id)} key={option?.id} className={`flex w-10 items-center justify-center lg:justify-start lg:p-2 lg:w-48 h-10 gap-x-3 cursor-pointer relative ${activeTab === option?.id && 'text-[#00C614] bg-white shadow-sm rounded'}`} role='button'>
                                <div className='w-5 h-5 relative'><Image src={option?.src} layout='fill' alt={option?.name} /></div>
                                <h1 className='hidden lg:block'>{option?.name}</h1>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className='w-full'><Dashboard/></div>
        </div>
    )
}

export default SideBar