import React from 'react';
import { NavLink } from 'react-router';

const Doctor = ({single}) => {

    return (
        
        <div className="card bg-base-100 shadow-sm  ">
        <figure>
          <img className='h-100 w-full rounded-2xl'
            src={single.image}
            alt="Shoes" />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title">
         
            <div className="badge badge-primary">Available</div>
            <div className="badge badge-secondary">{single.experience}</div>
          </h2>
          <h1 className='text-2xl font-bold'>{single.name}</h1>
          <p>{single.education}</p>
          <h1> <span className='border h-5 w-5 rounded-[50%] p-1'>R</span> Reg No : {single.registration_number}|</h1>
          <div className="card-actions justify-center">
         <NavLink to={`/doctorDetails/${single.id}`} ><div className="badge badge-outline px-30 py-4 rounded-3xl text-fuchsia-700 font-bold">View Details</div></NavLink>   
            
          </div>
        </div>
      </div>
    );
};

export default Doctor;