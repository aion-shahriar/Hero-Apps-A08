import React, { useState } from 'react';
import { loadInstalledList, removeFromInstalledList } from '../utils/localStorage';

import { FaDownload } from 'react-icons/fa';

import ratingImg from '../assets/icon-ratings.png'
import { toast } from 'react-toastify';





const InstalledApps = () => {

    const [InstalledList, setInstalledlist] = useState(()=>loadInstalledList());
    const [sortOrder, setSortOrder] = useState('');

   




    if(!InstalledList.length) {
        return <> <div><p className='text-center font-bold text-3xl mt-24'>No App is currently installed.</p></div></>
    }

    const sortedItem = (()=> {
        if(sortOrder === 'price-asc') {
            return [...InstalledList].sort((a,b)=> a.size  - b.size);
        }
        else if(sortOrder === 'price-desc') {
            return [...InstalledList].sort((a,b) => b.size - a.size);
        }
        else {
            return InstalledList;
        }
    })()

    



    const handleRemove = (id) => {
        const app = InstalledList.find(p => p.id === id);
        toast.success(`${app.title} uninstalled successfully.`)
        removeFromInstalledList(id);
        setInstalledlist(prev => prev.filter(p=> p.id !== id));
        

    }


    const totalsByCategory = {};

    console.log(InstalledList)
    InstalledList.map(app => {
        const category = app.category;
        totalsByCategory[category] = (totalsByCategory[category] || 0 ) + app.price;
    })

    
    return (
        <div className='space-y-6 max-w-[1440px] mx-auto'>
            <h1 className='font-bold text-4xl text-center mt-10'>Your Installed Apps</h1>
            <p className='text-center'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex justify-between py-5 items-center'>
                <h1 className='text-2xl font-semibold'> <span>{InstalledList.length}</span> Apps Found</h1>


                <label htmlFor="" className='form-control w-full max-w-40'>
                    <select className="select select-bordered" value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                        <option value="none">Sort by Size</option>
                        <option value="price-asc">Low-&gt;High</option>
                        <option value="price-desc">High-&gt;Low</option>
                    </select>
                </label>
            </div>

            <div className='space-y-3 pb-10'>
                {
                    sortedItem.map(p => (
                        <div key = {p.id} className='card card-side bg-base-100 shadow'>
                            <figure className='m-4'>
                                <img src={p.image} alt="" className='h-22 w-30 rounded-2xl'/>
                            </figure>

                            <div className='card-body flex flex-col gap-3'>
                                <h3 className='card-title'>{p.title}</h3>
                                <div className='flex gap-4'>

                                    <div className='flex gap-2 justify-center items-center'>
                                        <FaDownload className='text-green-400'/> <span className='text-green-400'>{p.downloads}</span>
                                    </div>

                                    <div className='flex gap-1 justify-center items-center'>
                                        <img src={ratingImg} alt="" className='w-3 h-4'/><span className='text-amber-600'>{p.ratingAvg}</span>
                                    </div>

                                    <div>
                                        <p>{p.size} MB</p>
                                    </div>
                                </div>
                            </div>

                            <div className='pr-4 flex items-center gap-3'>
                                 <button onClick = {()=>handleRemove(p.id)}className='btn btn-outline text-white bg-green-400'>Uninstall</button>
                            </div>
                        </div>

                    ))
                }

            </div>

            
            
        </div>
    );
};

export default InstalledApps;