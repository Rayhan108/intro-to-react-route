import React from 'react';
import { Link } from 'react-router-dom';


const Friend = ({friend}) => {
    // console.log(friend)
    const {name,id,email,website} =friend;
    return (
        <>
          
          <div className='mt-12  p-5 bg-amber-100 rounded-md'>
          <h3>{name}</h3>
            <p>{email}</p>
            <p>{website}</p>
            <button className='bg-amber-400 text-white p-2 font-semibold text-1xl mt-3 rounded-md'><Link to={`/friends/${id}`}>Show Details</Link></button>
            
          </div>
            
        </>
    );
};

export default Friend;