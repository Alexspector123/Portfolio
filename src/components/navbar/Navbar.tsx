import React from 'react'

import { Sidebar } from './Sidebar'

export const Navbar = () => {
    return (
        <div className='absolute w-full'>
                    <div className="bg-white border-b border-gray-200 px-8 py-5.5 flex items-center justify-between">
            <span className="text-2xl font-mono">Hitori</span>

            <Sidebar />
        </div>
        </div>

    )
}
