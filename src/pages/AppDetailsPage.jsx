import React from 'react';
import { Link, useParams } from 'react-router';
import useApps from '../hooks/useApps';
import { updateList } from '../utils/localStorage';

import ratingImg from '../assets/icon-ratings.png'
import { FaDownload } from 'react-icons/fa';
import likeImg from '../assets/icon-review.png'


const AppDetailsPage = () => {
    const { id } = useParams();

    const {apps, loading} = useApps();

    const app = apps.find(p => String(p.id) === id);

    if(loading) return <p>Loading...</p>

    const {image, title, companyName, description, size, reviews, ratingAvg, downloads} = app;
    return (
        <div className="card bg-base-100 border shadow-sm">

            <div>
                <figure>
                    <img src={image} alt="app image" />
                </figure>
            </div>

            <div>
                <div>
                    <h2 className='text-3xl'>{title}</h2>
                    <p>Developed by <span className='primary'>{companyName}</span></p>
                </div>

                <div>
                    <div>
                        <FaDownload className='text-green-400'/>
                        <p>Downloads</p>
                        <p>{downloads}</p>
                    </div>

                    <div>
                        <img src={ratingImg} alt="" className='w-4'/>
                        <p>Average Ratings</p>
                        <p>{ratingAvg}</p>
                    </div>

                    <div>
                        <img src={likeImg} alt="" className='w-4'/>
                        <p>Total Reviews</p>
                        <p>{reviews}</p>
                    </div>

                </div>

                <div>
                    <Link to="/installed"><button onClick={() => updateList(app)} className="btn btn-primary bg bg-green-300">Install Now<span>({size})</span></button></Link>
                </div>
            </div>

            <div className='ratingsGraph'>

            </div>

            <div>
                <h2>Description</h2>
                <p>{description}</p>
            </div>
            
            
               
                
                
            
        </div>
    );
};

export default AppDetailsPage;