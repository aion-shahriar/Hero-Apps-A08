import React from 'react';
import { Link } from 'react-router';

const AppCard = ({app}) => {
    const {name, image, price, category, id} = app;
    return (
        <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out hover:cursor-pointer">
            <figure className='h-72 overflow-hidden'>
                <img
                src={image}
                className='w-full object-cover'
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                
                <p>Price: {price}</p>
                <p>Category: {category}</p>
                <div className="card-actions justify-end">
                <Link to={`/app/${id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default AppCard;