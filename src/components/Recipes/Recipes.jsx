import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({ recipe }) => {

    const [favorite, setFavorite] = useState(true);


    const { recipeName, ingredients, cookingMethod, rating, img } = recipe
    const handleFavorite = () => {
        setFavorite(!favorite);
        toast('Recipe Add To Favorite')
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {recipeName}</h2>
                    <p><span className='text-xl text-black font-medium'>Ingredients:</span>{
                        ingredients.map(i => <p>{i}</p>)
                    }
                    </p>
                    <p>
                        <span className='text-xl text-black font-medium'>Cooking Method:</span> {cookingMethod}
                    </p>
                    <p><span className='text-xl text-black font-medium'>Ratings:</span> <Rating
                        readonly
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-orange-500'
                        ></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating></p>
                    <div className="card-actions justify-center w-full">
                        <button onClick={handleFavorite} disabled={!favorite} className="btn btn-primary w-full">Favorite</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;