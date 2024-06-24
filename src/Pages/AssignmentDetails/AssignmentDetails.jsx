import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AssignmentDetails = () => {

    const assignDetails = useLoaderData()
    // console.log(assignDetails)


    return (
        <div>
            <div className='bg-base-200 my-20 p-24 flex items-center'>
                <div className='grid grid-cols-2 gap-10'>
                    <div className="grid grid-cols-1 card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1 className='card-title text-5xl font-bold'>{assignDetails.title}</h1>
                            <p className='my-3 text-xl'>{assignDetails.description}</p>
                            <p className='text-xl'>Marks : {assignDetails.marks}</p>
                            <p className='text-xl'>Defficalt lavel : {assignDetails.ass_lavel}</p>
                            <p className='text-xl'>{assignDetails.selectDate}</p>
                        </div>
                    </div>


                    <div className='grid grid-cols-1'>
                        <img className='w-full' src={assignDetails.image_url} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;