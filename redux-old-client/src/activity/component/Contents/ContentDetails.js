import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom'
import getContentDetailsData from '../../redux/thunk/content/getContentDetailsData';

function ContentDetails() {

    const contentsDetails = useSelector(state => state.contents.readingHistory)
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { _id } = useParams();
    // console.log("this is:", contentsDetails);

    useEffect(() => {
        dispatch(getContentDetailsData(_id))
    }, [_id, dispatch]);




    const contents = contentsDetails.reverse();
    const content = contents[0];
    if (!content) {
        return;
    }


    return (
        <div className='flex justify-center items-center'>


            <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col dark:text-white max-w-[768px]' title='click to see details'

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
                        {content.keyFeature.map((feature, i) => <li
                            key={i} className='text-sm '
                        >
                            {feature}
                            array[0]
                        </li>)}
                    </ul>
                </div>
                <div className=' flex-1'>
                    <ul className='space-y-2'>
                        {content.spec.map((s, i) => <li
                            key={i} className='text-sm '
                        >
                            {
                                s?.processor
                                    ?
                                    `processor: ${s?.processor}`
                                    :
                                    s?.motherboard
                                        ?
                                        `motherboard: ${s?.motherboard}`
                                        :
                                        s?.ram
                                            ?
                                            `ram: ${s?.ram}`
                                            :
                                            s?.graphics
                                                ?
                                                `graphics: ${s?.graphics}`
                                                :
                                                s?.storage
                                                    ?
                                                    `storage: ${s?.storage}`
                                                    :
                                                    s?.casing
                                                        ?
                                                        `casing: ${s?.casing}`
                                                        :
                                                        s?.psu
                                                            ?
                                                            `psu: ${s?.psu}`
                                                            :
                                                            s?.cooler
                                                                ?
                                                                `cooler: ${s?.cooler}`
                                                                :
                                                                ""
                            }
                        </li>)}
                    </ul>
                </div>
                <div className=' flex-1'>
                    <ul className='space-y-2'>

                        <li className='text-sm '>
                            BRAND:   {content?.brand}
                        </li>
                        <li className='text-sm '>
                            PRICE:  {content?.price}
                        </li>

                    </ul>
                </div>
                <div className='flex gap-2 mt-5'>
                    {!pathname.includes("cart") && (
                        <Link
                            className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold flex justify-center'
                            to="/">
                            <button
                                // onClick={() => dispatch(addToCart(content))}
                                className=""
                            >
                                Back to Home.
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContentDetails;

