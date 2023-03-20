import React from 'react'
import Products from '../Products/Products'

function Home() {
    return (
        <div>
            <div>
                <button className='btn'>Admin</button>
                <button className='btn'>User</button>
                <button className='btn'>Products</button>
            </div>
            <div>
                <Products />
            </div>
        </div>
    )
}

export default Home