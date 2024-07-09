import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';

const CreateAssignmentPage = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [label, setLabel] = useState(" ");
    const { user } = useAuth()

    const handleDifficultLavel = (e) => {
        setLabel(e.target.value)
    }


    const handleCreateAssignment = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const image_url = form.image_url.value;
        // const user_email = form.userEmail.value;
        const user_email = form.userEmail.value;
        const ass_lavel = label;
        const selectDate = startDate;

        const assignmentData = { title, description, marks, image_url, user_email, ass_lavel, selectDate }
        console.log(assignmentData)

        axios.post(`http://localhost:5000/createAssign`, assignmentData, {withCredentials : true} )
            .then(data => {
                console.log(data.data)
            })
    };

    return (
        <div>

            <div className='flex justify-center items-center'>
                <img className='w-full relative' src="https://i.postimg.cc/3r4zrzzn/pexels-katerina-holmes-5905615.jpg" alt="" />


                <div className='absolute w-1/2'>
                    <div className="card bg-base-200">
                        <form onSubmit={handleCreateAssignment} className="card-body">

                            <h1 className='text-5xl font-bold text-center'>Assignment Create Form</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="title" placeholder="Title name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="">Description</span>
                                </label>
                                <textarea type="text" name="description" placeholder="Descriptions" className="input input-bordered h-20 resize-none" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Marks</span>
                                </label>
                                <input type="text" name="marks" placeholder="Input marks" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Thumbnail Image URL</span>
                                </label>
                                <input type="text" name="image_url" placeholder="Thumbnail Image URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="email" defaultValue={user.email} name="userEmail" placeholder="User email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Difficulty label</span>
                                </label>
                                <select onChange={handleDifficultLavel} className='p-3 rounded-xl border-2'>
                                    <option className='p-4' value="" disabled>Chosse an options</option>
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>

                                <DatePicker className='w-full p-3 border-2 border-base-300' selected={startDate} onChange={(date) => setStartDate(date)} />

                            </div>


                            <div className="form-control mt-6">
                                <button className="btn bg-orange-600 text-white font-bold text-xl">Create Assignment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CreateAssignmentPage;