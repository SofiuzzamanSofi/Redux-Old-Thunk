import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Main() {
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