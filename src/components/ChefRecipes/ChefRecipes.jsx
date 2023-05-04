import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';

const ChefRecipes = () => {
    const data = useLoaderData()
    const { id, chefName, yearsOfExperience, chefPicture, likes, numberOfRecipes, recipe, } = data;
    return (
        <div>
            <div className='mt-24 container mx-auto px-4'>
                <div className="card card-side bg-base-100 shadow-2xl">
                    <img className='w-2/4 ' src={chefPicture} alt="Movie" />
                    <div className="card-body">
                        <h2 className="card-title font-bold text-4xl mb-2">Name: {chefName}</h2>
                        <p className='text-xl'><span className='text-2xl'>Number Of Recipes:</span> {numberOfRecipes}</p>
                        <p className='text-xl'><span className='text-2xl'>Experience:</span> {yearsOfExperience}</p>
                        <p className='text-xl'><span className='text-2xl'>Chef Bio:</span> Stepping out from the shadows of their kitchens, chefs these days are admired and celebrated not only for their food but also their personalities, transforming them into culinary superstars loved by many. Unafraid to mingle with their audience and discuss everything from cooking to their personal lives</p>
                        <p className='flex gap-4 items-center text-2xl justify-end mt-0'>
                            <FaThumbsUp></FaThumbsUp>{likes}
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-20 container mx-auto px-4'>
                <h3 className='text-center text-3xl font-bold mb-20'>{chefName} Recipes</h3>
                <div className='grid grid-cols-3'>

                    {
                        recipe.map(r => <Recipes
                            key={r._id}
                            recipe={r}
                        ></Recipes>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;