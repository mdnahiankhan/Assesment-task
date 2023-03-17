import React from 'react';
import { Outlet } from 'react-router-dom';
import Register from '../RegisterPages/Register';

const Main = () => {
    return (
        <div className='bg-gray-300'>
            <Outlet></Outlet>
            <Register></Register>
        </div>
    );
};

export default Main;