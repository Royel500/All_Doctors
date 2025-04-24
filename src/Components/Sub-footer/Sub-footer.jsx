import React from 'react';
import CountUp from 'react-countup';

const Subfooter = () => {
    return (
        <div className='my-20 space-y-10'>
        <div className='text-center font-bold mx-5'>
            <h1 className='text-3xl'>We Provide Best Medical Services</h1>
            <p>Our platform connects you with verified,
                 experienced doctors across various specialties — all at your convenience. </p>

                 </div>


        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 lg:mx-30 mx-5 '>
            
        <div className='border shadow-2xl text-center font-bold text-3xl bg-white py-5 rounded-xl flex flex-col items-center'>
                <img className='' src="https://i.ibb.co.com/TMJ3JmqL/success-doctor.png" alt="" />
            <CountUp start={0} end={199} delay={1} duration={15}>
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        {start()} <span>+</span>
                    </div> 
                )}
            </CountUp> 
            <h1 className='text-lg'>Total Doctors</h1>
            </div>
            <div className='border shadow-2xl text-center font-bold text-3xl bg-white py-5 rounded-xl flex flex-col items-center'>
                <img src="https://i.ibb.co.com/39XPB520/success-review.png" alt="" />
            <CountUp start={0} end={467} delay={1} duration={15}>
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        {start()} <span>+</span>
                    </div> 
                )}
            </CountUp> 
            <h1 className='text-lg'>Total Reviews</h1>
            </div>
            <div className='border shadow-2xl text-center font-bold text-3xl bg-white py-5 rounded-xl flex flex-col items-center'>
                <img src="https://i.ibb.co.com/S7ZVDb1d/success-patients.png" alt="" />
            <CountUp start={0} end={1900} delay={1} duration={15}>
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        {start()} <span>+</span>
                    </div> 
                )}
            </CountUp> 
            <h1 className='text-lg'>Patients</h1>
            </div>
            <div className='border shadow-2xl text-center font-bold text-3xl bg-white py-5 rounded-xl flex flex-col items-center'>
                <img src="https://i.ibb.co.com/V05XXQZN/success-staffs.png" alt="" />
            <CountUp start={0} end={300} delay={1} duration={15}>
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        {start()} <span>+</span>
                    </div> 
                )}
            </CountUp> 
            <h1 className='text-lg'>Total Stuffs</h1>
            </div>
            
        </div>

       

        </div>
    );
};

export default Subfooter;