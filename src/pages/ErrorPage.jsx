import React from 'react';
// import { useRouteError } from 'react-router';

import errorImg from '/assets/error-404.png'
import { useNavigate } from 'react-router';


const ErrorPage = () => {
    // const error = useRouteError();
    const navigate = useNavigate();
    return (
        <div className='w-100 mx-auto'>
            <img src={errorImg} alt="error-img" className='mt-24' />
            <h2 className='text-4xl font-semibold mt-10'>Oops, page not found!</h2>
            <p className='text-xl mt-4'>The page you are looking for is not available.</p>
            <button className='btn bg text-white mt-4 ml-36' onClick = {()=> navigate(-1)}>Go Back!</button>
            
        </div>
    );
};

export default ErrorPage;