import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post =useLoaderData()
    const navigate = useNavigate()
    const goBack=()=>{
        navigate(-1)
    }
    // console.log(post)
    return (
        <div className='bg-cyan-100 p-5 m-3'>
            <h1 className='text-3xl font-bold mb-5'>Post No:{post.id}</h1>
            <h1 className='text-2xl font-bold underline'>{post.title}</h1>
            <p className='mt-3 text-1xl '>{post.body}</p>
            <button onClick={goBack} className='bg-amber-500 mt-3 text-white p-2 font-semibold text-1xl mt-3 rounded-md'>Back</button>
        </div>
    );
};

export default PostDetails;