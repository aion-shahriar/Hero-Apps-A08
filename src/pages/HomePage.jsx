import React from 'react';
import { Link } from 'react-router';
import useApps from '../hooks/useApps.js'
import AppCard from '../components/AppCard.jsx';
import SkeletonLoader from '../components/SkeletonLoader.jsx';
import Banner from '../components/Banner.jsx';

const HomePage = () => {
    
    const {loading, apps} = useApps();

    const featuredApps = apps.slice(0,8);
    
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            
            <div className='max-w-[1440px] mx-auto'>
                <div className='py-10'>
                <h1 className='text-3xl font-semibold text-center pt-10'>Trending Apps</h1>
                <p className='text-center mt-4'>Explore All Trending Apps on the Market developed by us</p>
                
            </div>
            
            {loading? <SkeletonLoader count={8}></SkeletonLoader> :
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {featuredApps.map(app => <AppCard key={app.id} app={app}></AppCard>)}
            </div>
            }
            <div className='text-center my-8'>
                <Link className='btn bg text-white' to = '/allapps'>Show All</Link>
            </div>
            </div>
        </div>
    );
};

export default HomePage;