import React from 'react';

import l1 from '../assets/Ellipse 24.png'
import l2 from '../assets/Ellipse 25.png'
import l3 from '../assets/Ellipse 26.png'

import main from '../assets/Device _ Iphone.png'

import r1 from '../assets/Ellipse 27.png'
import r2 from '../assets/Ellipse 28.png'
import r3 from '../assets/Ellipse 29.png'

const Banner = () => {
    return (
        <>
        <div className='flex flex-col justify-center items-center gap-5'>
            <h2>We Build <br /> <span>Productive</span> Apps</h2>
            <p>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className='flex gap-4'>
            <a href="https://play.google.com" className='btn' target='_Blank'>Google Play</a>
            <a href="https://www.apple.com/app-store/" className='btn' target='_Blank'>App Store</a>
        </div>

        <div className='flex border-red-500'>
            
            <div className='mt-10'>
                <img src={l1} alt="" className='' />
            <img src={l2} alt="" className='mt-10' />
            <img src={l3} alt="" className='mt-10' />
            </div>

            <img src={main} alt="" />

            <div className='mt-10'>
                <img src={r1} alt="" className='' />
            <img src={r2} alt="" className='mt-10' />
            <img src={r3} alt="" className='mt-10' />
            </div>
            
        </div>
        </div>
        <div>
            <h2>Trusted By Millions, Built For You</h2>
            <div>
                <p>Total Downloads</p>
                <p>29.6M</p>
                <p>21% More Than Last Month</p>
            </div>
            <div>
                <p>Total Reviews</p>
                <p>906K</p>
                <p>46% More Than Last Month</p>
            </div>
            <div>
                <p>Active Apps</p>
                <p>132+</p>
                <p>31 More Will Launch</p>
            </div>
        </div>
        </>
    );
};

export default Banner;