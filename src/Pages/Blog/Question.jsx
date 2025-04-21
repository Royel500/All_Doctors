import React from 'react';
import { BsCalendar2DayFill } from "react-icons/bs";


const Question = ({single}) => {
  
    return (
        <div className='my-10 shadow px-8 py-5 mx-20 bg-white rounded-2xl space-y-5'>
            <h1 className='text-3xl font-bold'>{single.question}</h1><hr />
            <span className='text-blue-500 text-2xl py-'>Answer :</span>
            <p className='font-bold'>{single.answer}</p> <hr />
            <p className='flex gap-3 py-5'> <span className='pt-1'><BsCalendar2DayFill /></span> <span>Added at : {single.added_date} </span></p>
        </div>
    );
};

export default Question;