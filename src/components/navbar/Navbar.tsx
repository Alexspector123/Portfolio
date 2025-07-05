import React from 'react'

import { Sidebar } from './Sidebar'

export const Navbar = () => {
    return (
        <div className='absolute w-full'>
                    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <span className="text-lg font-mono">Hitori</span>

            <Sidebar />
        </div>
        </div>

    )
}
