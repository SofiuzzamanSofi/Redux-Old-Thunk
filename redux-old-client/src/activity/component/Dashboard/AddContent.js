import React from 'react'

function AddContent() {


    const submitFrom = (e) => {
        e.preventDefault();
        const form = e.target;

        const model = form?.model?.value;
        const image = form?.image?.value;
        const keyFeature = form?.keyFeature?.value;
        const specprocessor = form?.specprocessor?.value;
        const contentInfo = {
            model,
            image: "htttp\:5000",
            keyFeature: [
                keyFeature,
            ],
            spec: [
                {
                    processor: specprocessor,
                }
            ]
        };
        console.log("contentInfo:", contentInfo);
    }


    return (
        <div className='p-5'>
            <div>
                <h1 className='text-center'>AddContent</h1>
            </div>
            <div>
                <form
                    className='grid gap-2'
                    onSubmit={submitFrom}
                >
                    <div className='grid gap-2'>
                        <label htmlFor="">Title</label>
                        <input name='model' type="text" placeholder='Title pls' className='p-2 rounded-sm' required />
                    </div>
                    <div className='grid gap-2'>
                        <label htmlFor="">Picture</label>
                        <input name='image' type="file" placeholder='Title pls' className='p-2 rounded-sm' required />
                    </div>
                    <div className='grid gap-2'>
                        <label htmlFor="">keyFeature || Summery</label>
                        <input name='keyFeature' type="text" placeholder='Summery' className='p-2 rounded-sm' required />
                    </div>
                    <div className='grid gap-2'>
                        <label htmlFor="">Detail</label>
                        <textarea name='specprocessor' type="text" placeholder='Details' className='p-2 rounded-sm' required />
                    </div>
                    <div className='grid gap-2'>

                        <input type="submit" value="Submit" placeholder='Details' className='p-2 rounded-sm bg-sky-800 cursor-pointer' required />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddContent