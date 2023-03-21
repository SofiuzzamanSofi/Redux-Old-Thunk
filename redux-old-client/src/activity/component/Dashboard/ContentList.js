import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ContentList() {


    const contents = useSelector(state => state.contents.contents);
    const navigate = useNavigate();
    console.log(".contents.contents:", contents);



    const goDetailsPage = (_id) => {
        // console.log("clicked:", _id);
        navigate(`/content/${_id}`)
    }


    return (
        <div className='p-5'>
            <div>
                <h1>Your Total content list</h1>
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
                        contents?.length ?
                            contents.reverse().map((r, i) => <tbody key={i}>
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

export default ContentList