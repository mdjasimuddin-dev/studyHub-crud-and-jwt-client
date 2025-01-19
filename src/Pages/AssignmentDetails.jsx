
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const AssignmentDetails = () => {

    const assignDetails = useLoaderData()
    const { user } = useAuth()
    const navigate = useNavigate()

    const { _id, title, description, marks, ass_lavel, selectDate, image_url } = assignDetails
    // console.log(_id, )

    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        axios.get(`https://crud-and-jwt-server-nine.vercel.app/MyAssignList/${user?.email}`, { withCredentials: true })
            .then(data => {
                if (data.data) {
                    for (let i of data.data) {
                        // console.log(i)
                        if (i.ass_id === _id) {
                            console.log('Assignment already submitted')
                            setIsDisabled(true);
                        }
                    }
                }
            })
    }, [])

    const handleSubmitAssignment = (e) => {
        e.preventDefault()

        const form = e.target;
        const linkSubmit = form.linkSubmit.value;
        const noteText = form.noteText.value;
        const user_email = user?.email;
        const user_name = user?.displayName;
        const ass_id = assignDetails._id;
        const ass_title = assignDetails.title
        const ass_descriptions = assignDetails.description
        const ass_marks = assignDetails.marks
        const ass_label = assignDetails.ass_lavel
        const owener_email = assignDetails.user_email
        const ass_image = assignDetails.image_url;
        const status = "pending"
        const mark = 'pending'
        const feedback = 'pending'

        const submitData = { linkSubmit, mark, feedback, user_name, ass_image, ass_id, ass_title, ass_descriptions, owener_email, ass_marks, ass_label, noteText, user_email, status }
        console.log(submitData)

        axios.post(`https://crud-and-jwt-server-nine.vercel.app/assingment`, submitData, { withCredentials: true })
            .then(data => {
                console.log(data.data)
                if (data.data.insertedId) {
                    Swal.fire({
                        title: "Successfull",
                        text: "Assignment submit Successfully.",
                        icon: "success"
                    });
                    navigate("/myAssignment")
                }
            })
    }

    const handleModal = () => {
        document.getElementById('my_modal_3').showModal()
    }


    return (
        <div>
            <div className='bg-base-200 lg:p-24 flex flex-col items-center'>
                <div className='grid lg:grid-cols-2 gap-3 lg:gap-10'>
                    <div className="grid grid-cols-1 m-3 card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h1 className='card-title text-5xl font-bold'>{title}</h1>
                            <p className='my-3 text-xl'>{description}</p>
                            <p className='text-xl'>Marks : {marks}</p>
                            <p className='text-xl'>Defficalt lavel : {ass_lavel}</p>
                            <p className='text-xl'>Date : {new Date(selectDate).toLocaleDateString()}</p>

                            <button className="btn bg-orange-600 text-white text-xl" disabled={isDisabled} onClick={() => handleModal()}>Take Assignment</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <form onSubmit={handleSubmitAssignment}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="font-bold text-xl">Pdf/Doc link</span>
                                            </label>
                                            <textarea type="text" name="linkSubmit" placeholder="pdf or doc link here" className="input input-bordered h-20 resize-none" required />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="font-bold text-xl">Note text</span>
                                            </label>
                                            <input type="text" name="noteText" placeholder="quick note text" className="input input-bordered" required />
                                        </div>
                                        <button className='w-full btn my-5 bg-orange-600 text-white'>Submit</button>
                                    </form>
                                </div>
                            </dialog>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 m-3'>
                        <img className='w-full lg:h-full' src={image_url} alt="" />
                    </div>
                </div>
            </div>


            {/* You can open the modal using document.getElementById('ID').showModal() method */}




        </div>
    );
};

export default AssignmentDetails;