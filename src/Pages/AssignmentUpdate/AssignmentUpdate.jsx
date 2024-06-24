import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';


const AssignmentUpdate = () => {

    const locations = useLocation()
    const navigate = useNavigate()
    const updateData = useLoaderData()
    // console.log(updateData)


    const [startDate, setStartDate] = useState(new Date());
    const [options, setOptions] = useState(" ");


    const selectOptions = (e) => {
        // console.log(e.target.value)
        setOptions(e.target.value)
    }

    const handleUpdateAssignment = (e) => {
        e.preventDefault()

        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const image_url = form.image_url.value;
        const ass_lavel = options;
        const selectDate = startDate;

        const updateAssign = { title, description, marks, image_url, ass_lavel, selectDate }
        console.log(updateAssign)

        fetch(`http://localhost:5000/updateAssign/${updateData._id}`, {
            method: "put",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateAssign)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate("/assignments")
            })
    }




    return (
        <div>

            <div className='flex justify-center items-center'>
                <img className='w-full relative' src="https://i.postimg.cc/3r4zrzzn/pexels-katerina-holmes-5905615.jpg" alt="" />


                <div className='absolute w-1/2'>
                    <div className="card bg-base-200">
                        <form onSubmit={handleUpdateAssignment} className="card-body">

                            <h1 className='text-5xl font-bold text-center'>Assignment Update Form</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" defaultValue={updateData.title} name="title" placeholder="Title name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="">Description</span>
                                </label>
                                <textarea type="text" defaultValue={updateData.description} name="description" placeholder="Descriptions" className="input input-bordered h-20 resize-none" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Marks</span>
                                </label>
                                <input type="text" defaultValue={updateData.marks} name="marks" placeholder="Input marks" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Thumbnail Image URL</span>
                                </label>
                                <input type="text" defaultValue={updateData.image_url} name="image_url" placeholder="Thumbnail Image URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Difficulty label</span>
                                </label>
                                <select defaultValue={updateData.ass_lavel} onChange={selectOptions} className='p-3 rounded-xl border-2'>
                                    <option className='p-4' disabled>Chosse an options</option>
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
                                <button className="btn bg-orange-600 text-white font-bold text-xl">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AssignmentUpdate;