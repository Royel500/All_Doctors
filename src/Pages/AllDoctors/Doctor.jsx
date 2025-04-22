import React from 'react';
import { Link } from 'react-router';
import { FaRegRegistered } from "react-icons/fa";
const Doctor = ({single}) => {

    return (
        
        <div className="card bg-base-100 shadow-sm  ">
        <figure className='p-5'>
        <img
      src={single.image}
      className=" rounded-lg shadow-xl h-100 w-130"
    />
          {/* <img className='h-100 w-full rounded-3xl p-10 '
            src={single.image}
            alt="Shoes" /> */}
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title">
         
            <div className="badge badge-primary">Available</div>
            <div className="badge badge-secondary">{single.experience}</div>
          </h2>
          <h1 className='text-2xl font-bold'>{single.name}</h1>
          <p>{single.education}</p>
          <h1 className='flex gap-2 mt-2 border-t border-dashed pt-2'>  <FaRegRegistered className='mt-1' /> <span> Reg No : {single.registration_number} </span></h1>
          <div className="card-actions justify-center">
         <Link to={`/doctorDetails/${single.id}`} >
         <div className="badge badge-outline px-30 py-4 rounded-3xl text-fuchsia-700 font-bold">View Details</div></Link>   
            
          </div>
        </div>
      </div>
    );
};

export default Doctor;