import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Contents from '../Contents/Contents'


function Home() {


    const [short, setShort] = useState(null)
    const readingHistory = useSelector(state => state.contents.readingHistory);


    return (
        <div>
            <div className='flex justify-center gap-2'>


                <div className='rounded-md bg-slate-900 '>
                    <select id="sort-by" className='bg-[#17191b] px-4 py-[11px] rounded-md pr-4 border-0'
                        onChange={(e) => setShort(e.target.value)}
                    >
                        <option value={null} disabled={short === "Latest" || short === "Oldest"}>Short By:</option>
                        <option value="Latest" disabled={short === "Latest"}>Latest</option>
                        <option value="Oldest" disabled={short === "Oldest"}>Oldest</option>
                    </select>
                </div>


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
                <Contents short={short} />
            </div>
        </div>
    )
}

export default Home