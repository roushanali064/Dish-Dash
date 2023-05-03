import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chef = () => {
    const [chef, setChef] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
    }, []);
    return (
        <div className='mt-24'>
            <h2 className='text-center font-extrabold text-5xl mb-24'>Our Top Chef</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {
                chef.map(c=><ChefCard
                key={c.id}
                chef={c}
                ></ChefCard>)
            }
            </div>
        </div>
    );
};

export default Chef;