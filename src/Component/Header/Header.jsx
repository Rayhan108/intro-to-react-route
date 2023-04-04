import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='bg-purple-300 mb-10'>
          
             <Link className='mr-12 text-2xl text-purple-700  py-2  font-bold hover:bg-purple-400' to="/">Home</Link>
             <Link className='mr-12 text-2xl text-purple-700  py-2  font-bold hover:bg-purple-400' to="/about">About</Link>
               <Link className='mr-12 text-2xl text-purple-700  py-2  font-bold hover:bg-purple-400' to="/contact">Contact</Link>
               <Link className='mr-12 text-2xl text-purple-700 py-2  font-bold hover:bg-purple-400' to="/help">Help</Link>
        
              
            </nav>
        </div>
    );
};

export default Header;