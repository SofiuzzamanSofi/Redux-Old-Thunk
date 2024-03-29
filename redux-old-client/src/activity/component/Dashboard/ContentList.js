import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getContentData from '../../redux/thunk/content/getContentData';

function ContentList() {


    const contents = useSelector(state => state.contents.contents);
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const goDetailsPage = (_id) => {
        navigate(`/content/${_id}`)
    };

    const deleteButtonFunction = (_id) => {
        const yesOrNo = window.confirm("Do you want to delete?")
        if (yesOrNo) {
            axios.delete(`${process.env.REACT_APP_SERVER_SITE_URL}/content/${_id}`)
                .then(res => {
                    if (res.data.success) {
                        dispatch(getContentData())
                        alert(res.data.message)
                    }
                })

        }
    };

    const goEditPage = (content) => {
        navigate(`/dashboard/edit-content/${content?._id}`, { state: { content } })
    }


    return (
        <div className='p-5'>
            <div>
                <h1>Your Total content list</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full text-black dark:text-white">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Img</th>
                            <th>Action</th>
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
                                    <th>{i + 1}</th>
                                    <td>{r?.model}</td>
                                    <td>
                                        <img className='max-w-[80px] max-h-[80px]' src={r?.image} alt="" />
                                    </td>
                                    <td>
                                        <div className='flex justify-center gap-1 items-center'

                                        >
                                            <button className='btn btn-xs bg-cyan-600 text-black z-10'
                                                onClick={(event) => {
                                                    goEditPage(r)
                                                    event.stopPropagation()
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button className='btn btn-xs bg-red-600 text-white z-10'
                                                onClick={(event) => {
                                                    deleteButtonFunction(r._id)
                                                    event.stopPropagation()
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
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