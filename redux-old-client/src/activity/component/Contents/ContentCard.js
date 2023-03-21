import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

function ContentCard({ content }) {

    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    console.log(content);

    const goDetailsPage = (_id) => {
        console.log("clicked:", _id);
        navigate(`content/${_id}`)
    }

    return (
        <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-white cursor-pointer' title='click to see details'
            onClick={() => goDetailsPage(content._id)}
        >
            {pathname.includes("cart") && (
                <div className='rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold '>
                    <p> {content.quantity} </p>
                </div>
            )}
            <div className='h-52 w-52 mx-auto'>
                <img src={content.image} alt={content.model} />
            </div>
            <h1 className='font-bold text-center'>{content.model}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {content.rating}</p>
            <div className=' flex-1'>
                <ul className='space-y-2'>
                    {content.keyFeature.map((feature) => {
                        return (
                            <li key={feature} className='text-sm '>
                                {feature}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='flex gap-2 mt-5'>
                {!pathname.includes("cart") && (
                    <button
                        // onClick={() => dispatch(addToCart(content))}
                        className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
                    >
                        Details
                    </button>
                )}

                {!pathname.includes("cart") && (
                    <button
                        title='Add to wishlist'
                        className='bg-indigo-500  py-1 px-2 rounded-full'
                    >
                        {/* <BiListPlus className='text-white' /> */}
                    </button>
                )}
                {pathname.includes("cart") && (
                    <button
                        title='Remove'
                        // onClick={() => dispatch(removeFromCart(content))}
                        className='flex justify-between px-3 bg-red-500 text-white p-1 rounded-full flex-1'
                    >
                        <p>Remove</p>
                        {/* <MdDeleteForever size='25' /> */}
                    </button>
                )}
            </div>
        </div>
    );
}

export default ContentCard