import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function ReadingHistory() {

    const readingHistory = useSelector(state => state.contents.readingHistory);
    const navigate = useNavigate();
    // console.log(".readingHistory.readingHistory:", readingHistory);



    const goDetailsPage = (_id) => {
        // console.log("clicked:", _id);
        navigate(`/content/${_id}`)
    }


    return (
        <div>
            <div>
                <h1>Your Reading History</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Img</th>
                            <th>Reading Count</th>
                        </tr>
                    </thead>
                    {
                        readingHistory?.length ?
                            readingHistory.map((r, i) => <tbody key={i}>
                                <tr
                                    className="hover cursor-pointer"
                                    title='click to see details'
                                    onClick={() => goDetailsPage(r._id)}
                                >
                                    <th>{i}</th>
                                    <td>{r?.model}</td>
                                    <td>
                                        <img className='max-w-[80px] max-h-[80px]' src={r?.image} alt="" />
                                    </td>
                                    <td>{r?.readingCount}</td>
                                </tr>

                            </tbody>)
                            :
                            ""
                    }
                </table>
            </div>
        </div>
    )
}

export default ReadingHistory