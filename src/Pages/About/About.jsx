import React from 'react';
import { NavLink } from 'react-router';


const About = () => {
    return (
        <>
        <div className='text-center lg:mx-10 px-5 my-25 space-y-5'>
            <h1 className='text-3xl font-bold'>You Have not Booked any Appointment yet</h1>
            <p>Our platfrom connects you with verified,
                experienced doctors across various specialities -- all at your convenience.</p>
                <NavLink to='/'><button className='bnt bg-blue-600 text-white px-5 py-2'>Book an Appointment
                    </button></NavLink>
                </div>
                
      
        </>
    );
};

export default About;