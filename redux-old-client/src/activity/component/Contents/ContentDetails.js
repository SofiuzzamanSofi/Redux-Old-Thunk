import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ContentDetails() {

    // const { pathname } = useLocation();
    // console.log(pathname);

    const { _id } = useParams();
    console.log(_id);


    return (
        <div>ContentDetails</div>
    )
}

export default ContentDetails

