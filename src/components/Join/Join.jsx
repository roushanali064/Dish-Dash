import React from 'react';
import coupple from '../../assets/coupleImg.png'

const Join = () => {
    return (
        <div className='mt-24 mb-24 container mx-auto px-4'>
            <div className="card card-side bg-base-100 lg:flex justify-between shadow-2xl">
                <div className='mt-20 ml-20'>
                    <span className='font-bold text-3xl text-amber-600'>Join Us</span>
                    <p className='font-extrabold text-5xl mt-8'>Let's start sharing <br />
                        your awesome <br />
                        recipes
                    </p>
                    <button className='btn mt-8 btn-warning'>Join Now</button>
                </div>
                <div>
                    <img className='lg:-mt-28' src={coupple} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Join;