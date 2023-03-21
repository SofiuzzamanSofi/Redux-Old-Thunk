import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Contents from '../Contents/Contents'


function Home() {

    const readingHistory = useSelector(state => state.contents.readingHistory);
    // console.log("readingHistory:", readingHistory);

    return (
        <div>
            <div className='flex justify-center gap-2'>
                <Link to="/dashboard"><button className='btn'>Admin</button></Link>
                {/* <Link><button className='btn'>User</button></Link> */}
                {
                    readingHistory?.length ?
                        <Link to="/reading-history"><button className='btn'>Reading His</button></Link>
                        :
                        ""
                }
            </div>
            <div className='my-4'>
                <Contents />
            </div>
        </div>
    )
}

export default Home