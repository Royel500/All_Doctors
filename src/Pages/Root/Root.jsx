import React from 'react';
import Navber from '../../Components/Header/Navber';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {

    const navigate = useNavigation();
    const isNavigating = Boolean(navigate.location);
    return (
        <div className='bg-gray-200'>
               
            <Navber></Navber>
            {isNavigating && <span>Loading...</span> }
            <Outlet></Outlet>
            {location.pathname !== '/contact' && <Footer />}
            <ToastContainer />
        </div>
    );
};

export default Root;