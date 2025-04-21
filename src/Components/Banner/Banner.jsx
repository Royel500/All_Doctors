import React from 'react';

const Banner = () => {
    return (
        <div className='text-center space-y-5 my-10'>
        <div>
            <h1 className='lg:text-5xl text-3xl font-bold mb-5'>Dependable Care, Backed by <br /> Trusted Professionals.</h1>
            <p>Our platform connects you with verified, experienced doctors across various specialties 
                — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation,
                 book appointments in minutes and receive quality care you can trust.</p>

        </div>

        <div>
            <input className='border px-10 py-1 rounded-2xl' type="text" placeholder='Search any Doctors' name="text" id="" />
           <button className='btn ml-2 rounded-3xl text-white bg-fuchsia-600'>Search Now</button>


        </div>


        <div className=' lg:flex gap-5 justify-center space-y-5 px-5'>

            <img  className='w-150 h-90' src="https://i.ibb.co.com/vC1zNR0F/banner-img-1.png" alt="doctors" />
            <img className='w-150 rounded-2xl h-90' src="https://i.ibb.co.com/tG6Yprj/couple.jpg" alt="doctors" />
        </div>
        </div>
    );
};

export default Banner;