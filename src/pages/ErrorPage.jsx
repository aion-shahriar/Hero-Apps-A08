import React from 'react';
import { useRouteError } from 'react-router';


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h3>404, Not found!!!!</h3>
            <p>Problem : {error.message}</p>
            <img src="" alt="img" />
        </div>
    );
};

export default ErrorPage;