import React from 'react';
import { useParams } from 'react-router';
import useApps from '../hooks/useApps';


const AppDetailsPage = () => {
    const { id } = useParams();

    const {apps, loading} = useApps();

    const app = apps.find(p => String(p.id) === id);

    if(loading) return <p>Loading...</p>

    const {image, name, price, category, description} = app;
    return (
        <div className="card bg-base-100 border shadow-sm">
            <figure className='h-84 overflow-hidden'>
                <img
                src={image}
                className='w-full object-cover'
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>

                <p>{description}</p>
                
                <p>Price: {price}</p>
                <p>Category: {category}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Add to WishList</button>
                </div>
            </div>
        </div>
    );
};

export default AppDetailsPage;