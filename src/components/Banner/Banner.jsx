import React from 'react';
import banner from '../../assets/banner.jpg'
import './Banner.css'
import { FaClock, FaThumbsUp } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='banner'>
            <div>
                <img className='w-full h-screen' src={banner} alt="" />
            </div>
            <div className='banner-info bg-white p-6 rounded'>
                <p className='text-orange-500 font-normal text-base mb-2'><small>S E A F O O D</small></p>
                <h3 className='text-black font-semibold text-3xl mb-4'>Spicy shrimp soup with tomatoes</h3>
                <p className='text-xl text-zinc-500 mb-6'>A full-bodied, mildly spiced tomato soup with sweetness <br /> and depth from roasted red peppers,... </p>
                <hr />
                <div className='flex justify-between items-center mt-2'>
                    <div className='flex items-center'>
                    <FaClock></FaClock>
                    <span className='ml-2'>60 min</span>
                    </div>
                    <FaThumbsUp></FaThumbsUp>
                </div>
            </div>

        </div>
    );
};

export default Banner;