import React from 'react';
import CountUp from 'react-countup';

const Subfooter = () => {
    return (
        <div className='my-20 space-y-10'>
        <div className='text-center font-bold'>
            <h1 className='text-3xl'>We Provide Best Medical Services</h1>
            <p>Our platform connects you with verified,
                 experienced doctors across various specialties — all at your convenience. </p>

                 </div>


        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 mx-30'>
            
            <div className='border shadow-2xl text-center font-bold text-3xl bg-white py-10 rounded-xl'>
            <CountUp start={0} end={199} delay={1} duration={5}>
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        {start()} <span>+</span>
                    </div> 
                )}
            </CountUp> 
            <h1 className='text-lg'>Total Doctors</h1>
            </div>
            <div className='border shadow-2xl text-center font-bold text-3xl bg-white py-10 rounded-xl'>
            <CountUp start={0} end={199} delay={1} duration={5}>
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        {start()} <span>+</span>
                    </div> 
                )}
            </CountUp> 
            <h1 className='text-lg'>Total Review</h1>
            </div>
            <div className='border shadow-2xl text-center font-bold text-3xl bg-white py-10 rounded-xl'>
            <CountUp start={0} end={199} delay={1} duration={5}>
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        {start()} <span>+</span>
                    </div> 
                )}
            </CountUp> 
            <h1 className='text-lg'>Total Doctors</h1>
            </div>
            <div className='border shadow-2xl text-center font-bold text-3xl bg-white py-10 rounded-xl'>
            <CountUp start={0} end={199} delay={1} duration={5}>
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        {start()} <span>+</span>
                    </div> 
                )}
            </CountUp> 
            <h1 className='text-lg'>Total Doctors</h1>
            </div>
            
        </div>

       

        </div>
    );
};

export default Subfooter;