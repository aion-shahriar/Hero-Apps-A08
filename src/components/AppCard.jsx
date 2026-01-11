import React from 'react';
import { Link } from 'react-router';

import ratingImg from '../assets/icon-ratings.png'
import { FaDownload } from 'react-icons/fa';

const AppCard = ({app}) => {
    const {title, image, downloads, ratingAvg, id} = app;
    return (
        <>
        <Link to={`/app/${id}`}>
        <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out hover:cursor-pointer">
            <figure className='h-72 overflow-hidden'>
                <img
                src={image}
                className='w-full object-cover'
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                
                <div className='flex justify-between '>
                    <div className='flex gap-2 btn bg-green-100'>
                        <FaDownload className='text-green-400'/> <span className='text-green-400'>{downloads}</span>
                    </div>
                    <div className='flex btn bg-amber-100 gap-1'>
                        <img src={ratingImg} alt="" className='w-4'/><span className='text-amber-600'>{ratingAvg}</span>
                    </div>
                </div>
                <div className="card-actions justify-end">
                {/* <Link to={`/app/${id}`} className="btn btn-primary bg">View Details</Link> */}
                </div>
            </div>
        </div>
        </Link>
        </>
    );
};

export default AppCard;

// {
//     "image": "https://example.com/app1.jpg",
//     "title": "ChatEase AI",
//     "companyName": "OpenVerse Labs",
//     "id": 1,
//     "description": "ChatEase AI is your personal productivity companion designed for quick, creative, and natural conversations. Whether you’re drafting emails, summarizing notes, or brainstorming ideas, it adapts to your tone and style instantly. The app supports multiple languages, smart templates, and context-aware replies. You can use it offline or connect to cloud mode for team sharing. With ChatEase, writing becomes faster, smarter, and more fun every day.",
//     "size": 58,
//     "reviews": 12450,
//     "ratingAvg": 4.8,
//     "downloads": 1200000,
//     "ratings": [
//       { "name": "1 star", "count": 350 },
//       { "name": "2 star", "count": 420 },
//       { "name": "3 star", "count": 860 },
//       { "name": "4 star", "count": 2400 },
//       { "name": "5 star", "count": 8420 }
//     ]
//   },