import React from 'react';
import "./ActiveLink.css"
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children,className}) => {
    // console.log(className)
    return (
        <NavLink 
        to={to}
        className={({ isActive} ) =>
          isActive
            ? `active ${className}`
            : `${className}`
        }
      >
   {children}
      </NavLink>
    );
};

export default ActiveLink;