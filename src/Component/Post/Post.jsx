import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    // console.log(post)
    const navigate =useNavigate()
    const handleNavigation=()=>{
        navigate(`/posts/${post.id}`)
    }
    
    return (
        <div className='bg-slate-300 p-3 m-3 '>
       
            <h1>ID:{post.id}</h1>
            <p>{post.title}</p>
            <button onClick={handleNavigation} className='bg-amber-400 text-white p-2 font-semibold text-1xl mt-3 rounded-md'>Show Details</button>
            {/* <button className='bg-amber-400 text-white p-2 font-semibold text-1xl mt-3 rounded-md'><Link to={`/posts/${post.id}`}>Show Details</Link></button> */}
        
        </div>
    );
};

export default Post;