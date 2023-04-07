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





    const changeImagePreview = e => {
        if (e.target.files.length === 0) return
        else {
            let file = e.target.files[0];
            let url = URL.createObjectURL(file);
            document.querySelector("#file-1-preview div").innerText = file.name;
            document.querySelector("#file-1-preview img").src = url;
        }
    }



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
        let contentInfo;
        if (image) {
            // upload image on cloudinary by server ---
            const res = await axios.post(`${process.env.REACT_APP_SERVER_SITE_URL}/image-upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (res?.data?.success) {
                contentInfo = {
                    model,
                    image: res.data?.data,
                    keyFeature: [
                        keyFeature,
                    ],
                    spec: [
                        {
                            processor: specprocessor,
                        }
                    ],
                    dateAndTime: new Date(),
                };
                const result = await axios.post(`${process.env.REACT_APP_SERVER_SITE_URL}/edit-content/${content._id}`, contentInfo)
                setButtonLoading(false)
                if (result?.data?.success) {
                    dispatch(getContentData())
                    alert("data post success")
                    navigate("/dashboard")
                }
            }
            else {
                setButtonLoading(false)
            }
        }
        else {
            contentInfo = {
                model,
                image: content.image,
                keyFeature: [
                    keyFeature,
                ],
                spec: [
                    {
                        processor: specprocessor,
                    }
                ],
                dateAndTime: new Date(),
            };
            const result = await axios.post(`${process.env.REACT_APP_SERVER_SITE_URL}/edit-content/${content._id}`, contentInfo)
            setButtonLoading(false)
            if (result?.data?.success) {
                dispatch(getContentData())
                alert(result?.data?.message)
                navigate("/dashboard")
            }
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
                        {/* <input name='image' type="file" placeholder='Title pls' className='p-2 rounded-sm' required accept='image/*' /> */}




                        {/* imge preview ------ */}
                        <div className='grid mb-2'>
                            <div className='form-element shadow-lg'>
                                <input name='image' type="file" id='file-1' accept='image/*'
                                    className='hidden'
                                    onChange={changeImagePreview}
                                />
                                <label htmlFor="file-1" id='file-1-preview'>
                                    <img src={content.image} alt=""
                                        className='h-full w-full object-none max-h-[500px] cursor-pointer'
                                    />
                                    <div
                                        className='relative mt-[-40px] bg-[rgba(0,0,0,0.5)] text-center leading-10 text-lg text-[#f5f5f5] font-semibold'>
                                        <span className='text-4xl'> + </span>
                                    </div>
                                </label>
                            </div>
                        </div>


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