import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
    return (
        <div className='col-span-2 bg-gray-900 text-white h-[calc(100vh-25px)] p-5 rounded-lg'>
            <ul className='flex gap-3  flex-col h-full'>
                <li className="">Admin Dashboard</li>
                <li>
                    <Link to='/dashboard'>Product List</Link>
                </li>
                <li>
                    <Link to='add-product'> Add Product </Link>
                </li>
                <li className='mt-auto'>
                    <Link to='/'> Back to Home </Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;