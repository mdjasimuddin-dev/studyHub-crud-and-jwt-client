import React, { useState } from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
// import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const MyAssignment = () => {

    const { user } = useAuth()
    console.log(user?.email)

    const [assign, setAssign] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/MyAssignList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAssign(data)
            })
    }, [user])



    return (
        <div className='lg:mb-24 my-5'>
            <h1 className='text-center text-3xl lg:text-4xl font-bold py-4'>My Assignment List</h1>
            <hr className='h-1 bg-gray-400' />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 lg:mt-10 m-2'>
                {
                    assign.map(item => <div key={item._id}>
                        {/* <h1>This is sumitted assignment id : {item._id}</h1> */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 p-2 shadow-xl border-2">
                            <div>
                                <img src={item.ass_image} alt="Assignment image" className='h-full ' />
                            </div>

                            <div className="space-y-2 lg:px-4 lg:col-span-2">
                                <div className='flex justify-between items-center'>
                                    <h1 className=''>Deficult label : {item.ass_label}</h1>
                                    <h1 className=' text-white bg-orange-600 rounded-md p-2'>{item.status}</h1>
                                </div>
                                <h2 className="card-title font-bold text-2xl">Title : {item.ass_title.length > 20 ? item.ass_title.slice(0, 20) + "..." : item.ass_title}</h2>
                                <p className=''>{item.ass_descriptions}</p>
                                <div className='flex justify-between'>
                                    <h1 className="">Your mark : {item.mark}</h1>
                                    <h1 className=""> Assignment mark : {item.ass_marks}</h1>
                                </div>
                                <h1 className="bg-orange-400 p-2">feedback : {item.feedback}</h1>
                                
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default MyAssignment;