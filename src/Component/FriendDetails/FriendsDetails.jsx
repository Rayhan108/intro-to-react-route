import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
    const friends =useLoaderData();
    console.log(friends)
    return (
        <div>
            
        </div>
    );
};

export default FriendsDetails;