import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Main() {
    return (
        <>
            <Header />
            <div className='mb-16'>

                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Main