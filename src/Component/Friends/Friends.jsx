import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends =useLoaderData();
    // console.log(friends)
    return (
        <div>
            <h1 className='text-3xl font-bold '><span className='underline'>Total Friends:</span> {friends.length}</h1>
            <div  className='grid grid-cols-3 gap-3 '>
                {
                    friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;