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
            <ToastContainer 
  position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={true}
  closeOnClick
  pauseOnHover
  draggable
  theme="colored"
/>
            {isNavigating && <span>Loading...</span> }
            <Outlet></Outlet>
            {location.pathname !== '/contact' && location.pathname !== '/error' && <Footer />}

        </div>
    );
};

export default Root;