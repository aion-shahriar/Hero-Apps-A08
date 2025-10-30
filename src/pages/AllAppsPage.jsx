import React, { useState } from 'react';
import useApps from '../hooks/useApps';
import AppCard from '../components/AppCard';
import SkeletonLoader from '../components/SkeletonLoader';

const AllAppsPage = () => {
    const { loading, apps } = useApps();
    const [search, setSearch] = useState('');

    const term = search.trim().toLowerCase();

    const searchedApps = term?
    apps.filter(product => product.name.trim().toLowerCase().includes(term))
    :
    apps
    return (
        <div>
            <div className='flex justify-between py-5 items-center'>
                <h1 className='text-3xl font-semibold'>All Apps <span>({searchedApps.length})</span></h1>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search Product" onChange={(e)=>setSearch(e.target.value)} value={search}/>
                </label>
            </div>
            
            {loading? <SkeletonLoader count={17}></SkeletonLoader> : 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {searchedApps.map(app => <AppCard key={app.id} app={app}></AppCard>)}
            </div>
            }
        </div>
    );
};

export default AllAppsPage;