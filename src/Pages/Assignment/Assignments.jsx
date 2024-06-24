import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Assignments = () => {
    const assignmentall = useLoaderData()
    const  [assignment, setAssignment]  = useState(assignmentall)


    // cd 

    const deleteAssignment = (id) => {
        console.log("Assignmetn Deleter : ", id)
        fetch(`http://localhost:5000/deleteAssign/${id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                console.log("Delete Succesfull : ", data)
                const remaining = assignment.filter(assign => assign._id !== id)
                setAssignment(remaining)
            })
    }



    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>Total Assignment : {assignmentall.length}</h1>


            <div>
                <h1 className='text-2xl font-bold my-2'>Assignmetn lavel</h1>
                <select className="select select-bordered join-item w-64">
                    <option disabled selected>Filter</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Mideum</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            <div className='my-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='grid grid-cols-7 text-center bg-slate-300 text-black text-xl'>
                                <th className='grid grid-cols-1'>Picture</th>
                                <th className='grid grid-cols-1'>Title</th>
                                <th className='grid grid-cols-1'>Lavel</th>
                                <th className='grid grid-cols-1'>Marks</th>
                                <th className='grid grid-cols-1'>Delete</th>
                                <th className='grid grid-cols-1'>Update</th>
                                <th className='grid grid-cols-1'>View</th>
                            </tr>
                        </thead>
                        <tbody className='my-10'>
                            {/* row 1 */}
                            <div>
                                {
                                    assignment.map(data =>
                                        <tr className='grid grid-cols-8 items-center text-xl'>
                                            <td className='grid grid-cols-1'>
                                                <div className="flex items-center gap-3">
                                                    {/* picture  */}
                                                    <img className='' src={data.image_url} alt="image" />
                                                </div>
                                            </td>

                                            <td className='grid col-span-2'> {data.title}</td>
                                            <td className='grid grid-cols-1'>{data.ass_lavel}</td>
                                            <td className='grid grid-cols-1'>{data.marks}</td>
                                            <th className='grid grid-cols-1'>
                                                <Link to={`/assignmentsDetails/${data._id}`} className="btn btn-ghost bg-green-600 text-white">View</Link>
                                            </th>
                                            <th className='grid grid-cols-1'>
                                                <Link to={`/assignmentUpdate/${data._id}`} className="btn btn-ghost bg-orange-600 text-white ">Update</Link>
                                            </th>
                                            <th className='grid grid-cols-1'>
                                                <button onClick={() => deleteAssignment(data._id)} className="btn btn-ghost bg-red-600 text-white">Delete</button>
                                            </th>
                                        </tr>
                                    )
                                }
                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Assignments;