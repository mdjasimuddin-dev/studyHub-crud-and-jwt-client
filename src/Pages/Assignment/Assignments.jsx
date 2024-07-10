import {useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
import useAuth from '../../Hooks/useAuth';

const Assignments = () => {
    const assignmentall = useLoaderData()
    // const [assignment, setAssignment] = useState(assignmentall)

    const { user } = useAuth()

    const deleteAssignment = (id, userEmail) => {
        console.log(id)
        console.log(userEmail)
        if (user?.email === userEmail) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/deleteAssign/${id}`, {
                        method: 'delete'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deleteCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }

                            // const remaining = assignment.filter(assign => assign._id !== id)
                            // setAssignment(remaining)
                        })
                }
            })
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Only the user who created it can delete it.!"
            });
        }

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
                            <tr className='grid grid-cols-8 text-center bg-slate-300 text-black text-xl'>
                                <th className='grid grid-cols-1'>Picture</th>
                                <th className='grid grid-cols-1 col-span-2'>Title</th>
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
                                    assignmentall.map(data =>
                                        <tr key={data._id} className='grid grid-cols-8 items-center text-center text-xl'>
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
                                                <button onClick={() => deleteAssignment(data._id, data.user_email)} className="btn btn-ghost bg-red-600 text-white">Delete</button>
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