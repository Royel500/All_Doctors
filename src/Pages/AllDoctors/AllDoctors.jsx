import React, { useState, Suspense } from 'react';
import Doctor from './Doctor';

const AllDoctors = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(6); 

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <>
      <div className="text-center font-bold my-10 mt-20">
        <h1 className="text-3xl">Our Best Doctors</h1>
        <p>
          Our platform connects you with verified, experienced doctors across various specialties — all at your
          convenience. <br /> Whether it's a routine checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:pl-10 px-2 gap-5">
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
        
          {data.slice(0, visibleCount).map((single) => (
            <Doctor key={single.id} single={single} />
          ))}
        </Suspense>
      </div>

      {visibleCount < data.length && (
        <div className="text-center mt-6">
          <button className="btn btn-primary rounded-3xl" onClick={handleShowMore}>
            View All Doctors
          </button>
        </div>
      )}
    </>
  );
};

export default AllDoctors;