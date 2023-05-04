import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div>
                {navigation.state === 'loading' && <button className="btn loading">loading</button>}
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;