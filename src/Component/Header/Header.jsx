import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div>
            <nav className='bg-purple-300 mb-10'>
          
             <ActiveLink className='mr-12 text-2xl text-purple-700  py-2  font-bold hover:bg-purple-400' to="/">Home</ActiveLink>
             <ActiveLink className='mr-12 text-2xl text-purple-700  py-2  font-bold hover:bg-purple-400' to="/about">About</ActiveLink>
               <ActiveLink className='mr-12 text-2xl text-purple-700  py-2  font-bold hover:bg-purple-400' to="/contact">Contact</ActiveLink>
               <ActiveLink className='mr-12 text-2xl text-purple-700 py-2  font-bold hover:bg-purple-400' to="/help">Help</ActiveLink>
               <ActiveLink className='mr-12 text-2xl text-purple-700 py-2  font-bold hover:bg-purple-400' to="/friends">Friends</ActiveLink>
               <ActiveLink className='mr-12 text-2xl text-purple-700 py-2  font-bold hover:bg-purple-400' to="/posts">Posts</ActiveLink>
        
              
            </nav>
        </div>
    );
};

export default Header;