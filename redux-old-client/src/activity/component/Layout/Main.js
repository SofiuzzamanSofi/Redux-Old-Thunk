import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom'
import getContentData from '../../redux/thunk/content/getContentData';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Main() {

    // console.log(contents);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContentData())
    }, [dispatch]);


    return (
        <>
            <Header />
            <div className=''>

                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Main