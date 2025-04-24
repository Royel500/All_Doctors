import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreBooking, removeFromStoreBD } from '../DoctorDetails/HandleBooking';
import Recharts from '../../Components/Recharts/Recharts';
import About from './../About/About';


const Booking = () => {
  const data = useLoaderData();
  const [doctor, setDoctor] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const storeBookingData = getStoreBooking();
    const convert = storeBookingData.map((id) => parseInt(id));
    const doctors = data.filter((doctorr) => convert.includes(doctorr.id));
    setDoctor(doctors);


    const updatedChartData = doctors.map((doc) => ({
      name: doc.name,
      fee: doc.fee,
    }));
    setChartData(updatedChartData);
  }, [data]);

  const handleCancelAppointment = (id) => {
   
    removeFromStoreBD(id);

  
    setDoctor((prevDoctors) => prevDoctors.filter((doc) => doc.id !== id));

  
    setChartData((prevChartData) => prevChartData.filter((doc) => doc.name !== doctor.find((d) => d.id === id)?.name));
  };

  if (doctor.length === 0) {
    return <About></About>;
  }

  return (
    <div className="my-20 py-10">
      <Recharts data={chartData} />
      <div className="text-center mx-10 my-10">
        <h1 className="text-3xl font-bold">My Today Appointments</h1>
        <p>
          Our platform connects you with verified, experienced doctors across various specialties — all at your
          convenience.
        </p>
      </div>

      <div className="flex flex-col gap-y-6 px-10">
        {doctor.map((doc) => (
          <div
            key={doc.id}
            className="flex flex-col justify-between bg-white shadow-md rounded-xl p-5 h-full"
          >
            <div>
              <h1 className="text-xl font-bold">{doc.name}</h1>
              <p className="text-gray-600">{doc.education}</p>
              <p className="text-gray-800 font-semibold mt-4">
                Appointment Fee: {doc.fee} Taka + Vat
              </p>
            </div>
            <button
              className="btn btn-outline btn-error rounded-lg mt-4"
              onClick={() => handleCancelAppointment(doc.id)}
            >
              Cancel Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;