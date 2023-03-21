import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getContentData from '../../redux/thunk/content/getContentData';
import ContentCard from './ContentCard';

function Contents() {

    const contents = useSelector(state => state.contents.contents)
    // console.log(contents);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContentData())
    }, [dispatch]);


    return (
        <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 pb-10'>
            {contents?.length && contents.map((content, i) => < ContentCard key={i} content={content} />)}
        </div>
    )
}

export default Contents