import React, { useState } from 'react'
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import getContentData from '../../redux/thunk/content/getContentData';



function EditContent() {

    const [buttonLoading, setButtonLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const content = location.state?.content;
    const dispatch = useDispatch();

    const submitFrom = async (e) => {
        e.preventDefault();
        const form = e.target;

        const model = form?.model?.value;
        const image = form?.image?.files[0];
        const keyFeature = form?.keyFeature?.value;
        const specprocessor = form?.specprocessor?.value;

        const formData = new FormData();
        formData.append("file", image);

        setButtonLoading(true)
        const res = await axios.post(`${process.env.REACT_APP_SERVER_SITE_URL}/image-upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        if (res?.data?.success) {
            const contentInfo = {
                model,
                image: res.data?.data,
                keyFeature: [
                    keyFeature,
                ],
                spec: [
                    {
                        processor: specprocessor,
                    }
                ]
            };
            const result = await axios.post(`${process.env.REACT_APP_SERVER_SITE_URL}/add-content`, contentInfo)
            setButtonLoading(false)
            if (result?.data?.success) {
                dispatch(getContentData())
                alert("data post success")
                navigate("/dashboard")
            }
        }
        else {
            setButtonLoading(false)
            console.log("add content FAILED");
        }


    }


    return (
        <div className='p-5'>
            <div>
                <h1 className='text-center'>EditContent</h1>
            </div>
            <div>
                <form
                    className='grid gap-2'
                    onSubmit={submitFrom}
                >
                    <div className='grid gap-2'>
                        <label htmlFor="">Title</label>
                        <input name='model' type="text" placeholder='Title pls' className='p-2 rounded-sm' required
                            defaultValue={content?.model}
                        />
                    </div>
                    <div className='grid gap-2'>
                        <label htmlFor="">Picture</label>
                        <input name='image' type="file" placeholder='Title pls' className='p-2 rounded-sm' required accept='image/*' />
                    </div>
                    <div className='grid gap-2'>
                        <label htmlFor="">keyFeature || Summery</label>
                        <input name='keyFeature' type="text" placeholder='Summery' className='p-2 rounded-sm' required
                            defaultValue={content?.keyFeature[0]}
                        />
                    </div>
                    <div className='grid gap-2'>
                        <label htmlFor="">Detail</label>
                        <textarea name='specprocessor' type="text" placeholder='Details' className='p-2 rounded-sm' required
                            defaultValue={content?.spec[0].processor}
                        />
                    </div>
                    <div className='grid gap-2'>

                        <input type="submit" value={`${buttonLoading ? "Loading..." : "Submit"}`} placeholder='Details' className='p-2 rounded-sm bg-sky-800 cursor-pointer' required
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditContent