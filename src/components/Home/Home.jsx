import React from 'react';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import SingleChef from '../SingleChef/SingleChef';
import Join from '../Join/Join';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chef></Chef>
            <SingleChef></SingleChef>
            <Join></Join>
        </div>
    );
};

export default Home;