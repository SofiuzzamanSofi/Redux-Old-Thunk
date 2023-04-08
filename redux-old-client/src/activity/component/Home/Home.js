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
                <div>

                    <div className='rounded-md bg-slate-900'>
                        <select id="sort-by" className='bg-[#17191b] px-4 py-[11px] rounded-md pr-4 border-0'>
                            <option value="last-update">Short By:</option>
                            <option value="last-update">Latest</option>
                            <option value="first-update">Oldest</option>
                        </select>
                    </div>

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
                <Contents />
            </div>
        </div>
    )
}

export default Home