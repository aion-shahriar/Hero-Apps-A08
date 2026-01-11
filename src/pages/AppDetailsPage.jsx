import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import useApps from '../hooks/useApps';
import { loadInstalledList, updateList } from '../utils/localStorage';

import ratingImg from '../assets/icon-ratings.png'
import { FaDownload } from 'react-icons/fa';
import likeImg from '../assets/icon-review.png'
import { toast } from 'react-toastify';
import RatingsChart from '../components/RatingsChart';


const AppDetailsPage = () => {

   



    const [installedApps, setInstalledApps] = useState([]);
    useEffect(() => {
        setInstalledApps(loadInstalledList());
    }, []);

    const { id } = useParams();

    const {apps, loading} = useApps();

    const app = apps.find(p => String(p.id) === id);

    if(loading) return <p>Loading...</p>

    const {image, title, companyName, description, size, reviews, ratingAvg, downloads} = app;


     

    

    const isInstalled = installedApps.some(item => item.id === app.id);

    const handleInstall = () => {
        toast.success(`Installing ${title}`)
        updateList(app);
        setInstalledApps(loadInstalledList()); // sync after install
    };

    return (
        <div className="card bg-base-100 shadow-sm p-20">

            <div className='mt-10 flex gap-14'>
                <div className=''>
                <figure>
                    <img src={image} alt="app image" />
                </figure>
            </div>

            <div className='max-w-full'>
                <div className='pb-5'>
                    <h2 className='text-3xl font-semibold'>{title}</h2>
                    <p>Developed by <span className='primary'>{companyName}</span></p>
                </div>
                <hr />

                <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-10 pb-5'>
                    <div>
                        <FaDownload className='text-green-400'/>
                        <p>Downloads</p>
                        <p className='text-4xl font-bold'>{downloads}</p>
                    </div>

                    <div>
                        <img src={ratingImg} alt="" className='w-4'/>
                        <p>Average Ratings</p>
                        <p className='text-3xl font-bold'>{ratingAvg}</p>
                    </div>

                    <div>
                        <img src={likeImg} alt="" className='w-4'/>
                        <p>Total Reviews</p>
                        <p className='text-3xl font-bold'>{reviews}</p>
                    </div>

                </div>

                <div className='mt-5 ml-5'>
                    {isInstalled ? (
  <div className="inline-block cursor-not-allowed">
    <button
      disabled
      className="btn bg-gray-400 text-white opacity-60"
    >
      Installed
    </button>
  </div>
) : (
  <Link to="/installed">
    <button
      onClick={handleInstall}
      className="btn bg-green-400 text-white hover:bg-green-500"
    >
      Install Now ({size} MB)
    </button>
  </Link>
)}

                </div>
            </div>
            </div>

            <div className='ratingsGraph mt-10'>
                <h2 className='text-2xl font-semibold'>Ratings</h2>
                <RatingsChart app={app}></RatingsChart>
            </div>

            <div className='mt-10'>
                <h2 className='text-2xl font-semibold'>Description</h2>
                <p className='whitespace-pre-line mt-4'>{description}</p>

                

            </div>
            
            
               
                
                
            
        </div>
    );
};

export default AppDetailsPage;