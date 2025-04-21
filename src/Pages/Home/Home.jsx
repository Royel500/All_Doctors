import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AllDoctors from './../AllDoctors/AllDoctors';
import { useLoaderData } from 'react-router';
import Subfooter from './../../Components/Sub-footer/Sub-footer';

const Home = () => {
    const data = useLoaderData();
    
    return (
      <>
      <Banner></Banner>
      <AllDoctors data={data}></AllDoctors>
      <Subfooter></Subfooter>
      </>
    );
};

export default Home;