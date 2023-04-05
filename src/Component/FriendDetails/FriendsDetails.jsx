import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
    const friends =useLoaderData();
    // console.log(friends)
    return (
        <div className=''>
         <div className="bg-amber-200 p-3 m-5">
         <h1>{friends.name}</h1>
            <p>{friends.username}</p>
            <p>{friends.email}</p>
         </div>
        </div>
    );
};

export default FriendsDetails;