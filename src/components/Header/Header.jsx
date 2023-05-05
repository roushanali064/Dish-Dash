import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(authContext);

    const handleLogOut = () => {
        logOut()
            .then(res => {

            })
            .catch(error => {
                console.error(error.message)
            })
    }

    return (
        <div className='bg-base-300'>
            <div className="container mx-auto px-4 navbar bg-base-300 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <h1 className='font-extrabold text-3xl'>Dish<span className='text-orange-400'>Dash</span></h1>
                    </div>
                </div>
                <div className="navbar-center font-bold text-xl">
                    <NavLink style={({ isActive }) => { return { color: isActive ? 'orange' : '' } }} to='/' className='mr-3'>Home</NavLink>
                    <NavLink style={({ isActive }) => { return { color: isActive ? 'orange' : '' } }} to='/blog'>Blog</NavLink>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={handleLogOut} className='btn'>LogOut</button> : <Link to='/login' className='btn'>LogIn</Link>
                    }

                    {
                        user && 
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                            <div className="avatar ml-10">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                                    <img src={user?.photoURL} />

                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;