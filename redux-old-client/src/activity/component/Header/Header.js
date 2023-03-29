import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='text-center text-4xl font-bold mb-4'>
            <Link to={"/"}>
                This is Header.js
            </Link>
        </div>
    )
}

export default Header