import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

function Admin() {
    return (
        <div>
            <div>
                This is Admin Dashboard.
            </div>
            <div className='grid grid-cols-12 p-3 gap-3 '>
                <AdminSidebar />
                <div className='col-span-10 w-full bg-gray-900 text-white rounded-lg'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Admin