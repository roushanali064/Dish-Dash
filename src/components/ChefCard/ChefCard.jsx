import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience, id } = chef;
    return (
        <div className='container mx-auto px-4'>
            <div className=''>
                <div className="card shadow-2xl w-96 glass">
                    <figure><img 
                    className="lazy-img" 
                    data-lazy-src="" 
                    data-lazy-width="" 
                    src={chefPicture} 
                    alt="car!" 
                    /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {chefName}</h2>
                        <p>Experience: {yearsOfExperience}</p>
                        <p>Recipes: {numberOfRecipes}</p>
                        <p className='flex items-center gap-3'><FaThumbsUp></FaThumbsUp> {likes}</p>
                        <div className="card-actions justify-center">
                            <Link className='w-full' to={`/chef/${id}`}>
                            <button className="btn btn-primary w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">View Recipes</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;