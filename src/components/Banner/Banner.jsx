import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='relative h-10'>
            <div>
                <img className='w-full h-screen' src={banner} alt="" />
            </div>
            <div className='absolute top-0 bottom-0 left-0 right-0'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, eligendi.</p>
            </div>

        </div>
    );
};

export default Banner;