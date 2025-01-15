import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEye } from "react-icons/fa";
import Swal from 'sweetalert2';

const PendingCard = ({ Assign }) => {

    const { _id, user_name, ass_image, ass_label, ass_marks, mark, ass_title, linkSubmit, noteText, status } = Assign
    const [assignId, setAssignId] = useState()

    const test = () => {
        document.getElementById('my_modal_3').showModal()
        setAssignId(_id)
        // console.log(_id)
    }


    const handleAssignMark = (e) => {
        e.preventDefault()

        const form = e.target;
        const mark = form.mark.value;
        const feedback = form.feedback.value;
        const status = 'complete'

        const assignUpdate = { mark, feedback, status }
        console.log(assignUpdate)

        axios.put(`https://crud-and-jwt-server-nine.vercel.app/updateStatus/${assignId}`, assignUpdate, { withCredentials: true })
            .then(data => {
                console.log(data.data)
                Swal.fire({
                    icon: "success",
                    title: "Mark assign complete",
                    text: "Examinee got mark and change status",
                    timer: 1500
                  });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleDocPreview = () => {
        document.getElementById('preview_modal').showModal()
    }

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 p-2 shadow-xl border-2">
                <div>
                    <img src={ass_image} alt="Assignment image" className='md:w-full h-full lg:h-full ' />
                </div>

                <div className="space-y-2 md:space-y-5 lg:space-y-2 lg:px-4 lg:col-span-2 md:my-5 lg:my-2">
                    <div className='flex justify-between items-center'>
                        <h1 className='text-xl md:text-4xl lg:text-base'>Deficult label : {ass_label}</h1>
                        <h1 className='text-white bg-orange-600 rounded-md p-2 mt-2 md:mt-0 lg:mt-0 md:px-20 lg:p-2'>{status}</h1>
                    </div>
                    <h2 className="text-2xl font-bold md:text-5xl lg:text-2xl">Title : {ass_title.length > 20 ? ass_title.slice(0, 20) + "..." : ass_title}</h2>
                    <p className='md:text-4xl lg:text-base'> Examinee name : {user_name}</p>
                    <div className='flex justify-between'>
                        <h1 className="md:text-4xl lg:text-base">Your mark : {mark}</h1>
                        <h1 className="md:text-4xl lg:text-base"> Assignment mark : {ass_marks}</h1>
                    </div>

                    <div className='flex justify-center'>
                        <button className="btn bg-orange-600 text-white text-xl md:px-20 lg:p-2" onClick={test}>Give mark</button>
                    </div>

                </div>
            </div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <div>
                        <h1 className='text-2xl font-bold text-center'>Assingment submit info</h1>
                        <hr className='bg-base-300 my-4' />

                        <div className='border-2 p-3'>
                            <span className='text-2xl font-bold'>Link : </span>
                            <textarea className='w-full h-fit p-2 resize-none font-bold text-xl italic text-blue-600' readOnly>{linkSubmit}
                            </textarea>

                            <p className='text-2xl font-bold'>Note : </p>
                            <p className='w-full text-xl px-2'>
                                {noteText}
                            </p>
                            <div className='flex justify-center mt-2'>
                                <button onClick={() => handleDocPreview()} className='flex justify-center btn bg-orange-600 text-white mr-4'><span><FaEye /></span>Preview</button>
                            </div>

                        </div>

                    </div>

                    <form onSubmit={handleAssignMark}>

                        <div className="form-control">
                            <label className="label">
                                <span className="font-bold text-xl">Mark</span>
                            </label>
                            <input type="text" name="mark" placeholder="give assignment mark" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="font-bold text-xl">Feedback</span>
                            </label>
                            <input type="text" name="feedback" placeholder="Assignment feedback text" className="input input-bordered" required />
                        </div>

                        <button className='w-full btn my-5 bg-orange-600 text-white'>Submit</button>
                    </form>
                </div>
            </dialog>

            <dialog id="preview_modal" className="modal p-5">
                <div className="modal-box">
                {/* w-full lg:p-10 lg:m-24 bg-white lg:w-2/3 lg:rounded-3xl relative*/}
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <div>
                        <h1 className='text-2xl font-bold text-center'>Assingment Doc Preview</h1>
                        <hr className='bg-base-300 my-4' />
                        <div>
                            <iframe className='w-full h-screen' src={linkSubmit} title={`PDF Preview`} height="100%" style={{ border: 'none' }} />
                        </div>
                    </div>

                </div>
            </dialog>

        </div>
    );
};

export default PendingCard;