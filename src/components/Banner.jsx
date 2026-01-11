import React from 'react';

// import l1 from '../assets/Ellipse 24.png'
// import l2 from '../assets/Ellipse 25.png'
// import l3 from '../assets/Ellipse 26.png'

import main from '../assets/hero.png'

// import r1 from '../assets/Ellipse 27.png'
// import r2 from '../assets/Ellipse 28.png'
// import r3 from '../assets/Ellipse 29.png'

import PlayStoreImg from '../assets/google-play.png'
import AppStoreImg from '../assets/app-store.png'

const Banner = () => {
    return (
        <>
        <div className='flex flex-col justify-center items-center gap-5'>
            <h2 className='text-5xl font-bold text-center'>We Build <br /> <span className='text-primary'>Productive</span> Apps</h2>
            <p className='text-center'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>
Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className='flex gap-4'>
            <a href="https://play.google.com" className='btn' target='_Blank'>
            <img src={PlayStoreImg} alt="" className='w-5' />
            Google Play
            </a>
            <a href="https://www.apple.com/app-store/" className='btn' target='_Blank'>
            <img src={AppStoreImg} alt="" className='w-5' />
            App Store
            </a>
        </div>

        <div className=''>
            
            

            <img src={main} alt="" />

            
            
        </div>
        </div>
        <div className='bg pt-10'>
            <h2 className='text-center text-3xl font-semibold text-white'>Trusted By Millions, Built For You</h2>
            <div className='flex justify-center gap-32 py-10'>
                <div>
                <p className='text-white'>Total Downloads</p>
                <p className='text-white text-6xl font-bold'>29.6M</p>
                <p className='text-white'>21% More Than Last Month</p>
            </div> 
            <div> 
                <p className='text-white'>Total Reviews</p>
                <p className='text-white text-6xl font-bold'>906K</p>
                <p className='text-white'>46% More Than Last Month</p>
            </div> 
            <div> 
                <p className='text-white'>Active Apps</p>
                <p className='text-white text-6xl font-bold'>132+</p>
                <p className='text-white'>31 More Will Launch</p>
            </div>
            </div>
        </div>
        </>
    );
};

export default Banner;