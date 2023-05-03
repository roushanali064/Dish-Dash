import React from 'react';

const SingleChef = () => {
    return (
        <div className='mt-24 container mx-auto px-4'>
            <div className="card card-side bg-base-100 shadow-2xl">
                <img className='w-2/4 ' src="https://i.ibb.co/YWQy7C9/portrait-smiling-chef-uniform-1.jpg" alt="Movie" />
                <div className="card-body">
                    <h2 className="card-title font-bold text-4xl">Hello! My name is Jane Smith. Your new sous chef!</h2>
                    <p>Stepping out from the shadows of their kitchens, chefs these days are admired and celebrated not only for their food but also their personalities, transforming them into culinary superstars loved by many. Unafraid to mingle with their audience and discuss everything from cooking to their personal lives</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;