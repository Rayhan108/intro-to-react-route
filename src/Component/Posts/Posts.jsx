import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const allPosts =useLoaderData()
    // console.log(allPosts)
    return (
        <div className='grid grid-cols-3 gap-3 mt-10'>
          
            {
                allPosts.map(post=><Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;