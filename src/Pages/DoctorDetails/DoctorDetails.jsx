import React, { Suspense } from 'react';
import { useLoaderData, useParams } from 'react-router';
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
        <div className=" bg-white ">
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

      <h1 className='flex flex-row gap-5 text-cyan-600 font-bold  mx-3 p-2 '> <span className='bg-white pt-2 '> Availability: </span>{availability.map((time,index)=>(
        <ul className='rounded-3xl shadow p-2 px-4 bg-amber-50' key={index}>{time}</ul>
      ))}</h1>
     <h1>Consultation Fee : {fee} (incl.VAt) Per Consultation </h1>
    </div>
  </div>
</div>
        </div>
    );
};

export default DoctorDetails;