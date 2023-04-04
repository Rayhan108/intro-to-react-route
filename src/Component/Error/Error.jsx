import React from 'react';
import { useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError();
    // console.log(error)
    return (
        <div>
            <h1>Opps!</h1>
            <h3>Sorry,not found</h3>
            <p>
        <i>{error.statusText || error.message}</i>
      </p>
        </div>
    );
};

export default Error;