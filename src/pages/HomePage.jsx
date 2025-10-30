import React from 'react';
import { Link } from 'react-router';
import useApps from '../hooks/useApps.js'
import AppCard from '../components/AppCard.jsx';
import SkeletonLoader from '../components/SkeletonLoader.jsx';

const HomePage = () => {
    
    const {loading, apps} = useApps();

    const featuredApps = apps.slice(0,8);
    
    return (
        <div>
            <div className='flex justify-between py-5 items-center'>
                <h1 className='text-3xl font-semibold'>Featured Apps(8)</h1>
                <Link className='btn btn-outline' to = '/allapps'>See All Apps</Link>
            </div>
            
            {loading? <SkeletonLoader count={6}></SkeletonLoader> :
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {featuredApps.map(app => <AppCard key={app.id} app={app}></AppCard>)}
            </div>
            }
        </div>
    );
};

export default HomePage;