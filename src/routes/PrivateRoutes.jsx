import React, { useContext } from 'react';
import { authContext } from '../components/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading}=useContext(authContext);
    const location = useLocation()
    if(loading){
        return(
            <div>
                <button className="btn loading">loading</button>
            </div>
        )
    }

    if(user){
        return children
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>;
};

export default PrivateRoutes;