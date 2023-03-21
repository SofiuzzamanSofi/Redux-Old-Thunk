import React from 'react'
import Contents from '../Contents/Contents'


function Home() {
    return (
        <div>
            <div>
                <button className='btn'>Admin</button>
                <button className='btn'>User</button>
                <button className='btn'>Products</button>
            </div>
            <div>
                <Contents />
            </div>
        </div>
    )
}

export default Home