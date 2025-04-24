import React from 'react';
import { Link, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

const DoctorNot = () => {
    const location = useLocation(); // Get the current location

    return (
        <div className='text-center py-10 bg-white my-30 space-y-5'>
            <h1 className='text-3xl font-bold'>No Doctor Found</h1>
            <p>No doctor found with this ID.</p>
            <p>Invalid path: <strong>{location.pathname}</strong></p>
          <Link to='/'>  <button className='btn text-white bg-blue-600'>View All Doctor</button></Link>
        </div>
    );
};

export default DoctorNot;