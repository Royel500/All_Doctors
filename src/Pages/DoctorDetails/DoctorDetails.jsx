import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Details from '../../Components/Details/Details';

const DoctorDetails = () => {
    const details = useLoaderData();

    return (
        <div>
              <div>
            <h1>Doctor’s Profile Details</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut.
                 Suscipit sed est fermentum magna.
                 Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>

        </div>
           <Suspense fallback={ <span className="loading loading-bars loading-xl"></span>   }>
            {
                details.map((about)=> <Details key={about.id}  about={about}></Details> )
            }
            </Suspense>
        </div>
    );
};

export default DoctorDetails;