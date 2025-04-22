import React, { Suspense } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router';
import Details from '../../Components/Details/Details';

const DoctorDetails = () => {
   const {id} = useParams();
   const ConID = parseInt(id);
   const details = useLoaderData();
   const single = details.find(about => about.id === ConID)
   const {image,name,education,speciality,registration_number,working_place,availability,fee} = single;


    return (
        <div>
              <div className='text-center px-40 py-20 bg-white my-10 mx-10 rounded-2xl'>
            <h1 className='text-3xl font-bold'>Doctor’s Profile Details</h1>
            <p>Experienced and compassionate healthcare professionals committed to delivering
                 personalized care and promoting patient well-being through modern, evidence-based practices.</p>

        </div>
        <div className=" bg-white mx-10 rounded-2xl">
  <div className="hero-content   lg:flex-row">
    <img
      src={image}
      className=" rounded-lg shadow-2xl h-100 mr-10"
    />
    <div>
      <h1 className="text-5xl font-bold pt-0 pb-5">{name}</h1>

      <h1>{education}</h1>
      <h1 className='pb-2 font-bold'>{speciality}</h1>
  
      <h1>Working At ..</h1>
      <h1 className='pb-2 font-bold'>{working_place.name}</h1>      
      
      <h1 className='flex gap-20 mx-5 border-y py-3 border-dashed '>
         <span className='border h-5 w-5 rounded-[50%] p-0.5'>R</span><span>
          Reg No : {single.registration_number}</span></h1>


          <span className='bg-white pt-2 '> Availability: </span>
      <h1 className='flex flex-row gap-5 text-cyan-600 font-bold  mx-3 p-1'> {availability.map((time,index)=>(
        <ul className='rounded-3xl shadow p-2 px-4 bg-amber-50' key={index}>{time}</ul>
      ))}</h1>

     <h1 className='font-bold'>Consultation Fee : <span className='text-blue-600'>Taka : {fee}</span>  (incl.VAt) <span className='text-blue-600'>Per Consultation </span></h1>
    </div>
  </div>
</div>

<div className='text-center font-bold space-y-10 my-10 py-20 bg-white mx-10 rounded-2xl'>
    <h1 className='text-3xl'>Book an Appointment</h1>
    <h1 className='flex justify-between px-30'>

        <span>
       <h1>Availability</h1>
        </span>
        <span>
      <h1>Doctor Available Today</h1>
        </span>
    </h1>
    <p className='text-amber-300'>Due to high patient volume, we are currently accepting appointments for today only.
         We appreciate your understanding and cooperation.</p>

        <NavLink><button className='btn text-white  rounded-3xl ml-20 w-3/4 mx-20 bg-blue-600'>Book Appointment Now</button></NavLink> 
</div>
        </div>
    );
};

export default DoctorDetails;