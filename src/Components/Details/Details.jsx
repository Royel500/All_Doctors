import React from 'react';

const Details = ({about}) => {
   const {image,name,education,speciality,registration_number,working_place,availability,fee} = about;

    return (
        <> 
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <h1>{education}</h1>
      <h1>{speciality}</h1>
      <h1>Working At </h1>
      <h1>{working_place.name}</h1>      
      <h1>    {registration_number}</h1>
      <h1>Availability: {availability.map((time,index)=>(
        <li key={index}>{time}</li>
      ))}</h1>
     <h1>Consultation Fee : {fee} (incl.VAt) Per Consultation </h1>
    </div>
  </div>
</div>
            
        </>
    );
};

export default Details;