import React from 'react';

import {
    createBrowserRouter,
    
  } from "react-router";

import Root from '../Pages/Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Blog from '../Pages/Blog/Blog';
import Contact from '../Pages/Contact/Contact';
import DoctorDetails from '../Pages/DoctorDetails/DoctorDetails';
import Booking from '../Pages/Booking/Booking';
  

export const router = createBrowserRouter([
 
    {
        path: "/",
        Component:Root ,
        errorElement: <Error></Error>,
    children: [
        {
            index: true ,
            loader:()=> fetch('../../FackData.JSON'),
            path: "/" ,
            Component : Home,
            errorElement:<Error></Error>
        },
      
                {
                    path:'/about',
                    loader:()=> fetch('../../FackData.JSON'),
                    Component:Booking 
                },
     
        {
            path:'/blogs',
            loader:()=> fetch('Question.JSON'),
            Component:Blog
        },
        {
            path:'/contact',
           
            Component:Contact
        },
        {
            path:'/doctorDetails/:id',
            loader:()=> fetch('../../FackData.JSON'),
            Component:DoctorDetails

        },
        
   
    ]
    },
  ]);

