import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import Swal from "sweetalert2";

const AssignmentDetails = () => {
  const assignDetails = useLoaderData();
  const { user } = useAuth();
  //   const navigate = useNavigate();

  const {
    title,
    description,
    marks,
    ass_laval,
    create_date,
    image_url,
    creator,
  } = assignDetails;
  //   // console.log(_id, )

  //   const [isDisabled, setIsDisabled] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://crud-and-jwt-server-nine.vercel.app/MyAssignList/${user?.email}`,
  //       { withCredentials: true }
  //     )
  //     .then((data) => {
  //       if (data.data) {
  //         for (let i of data.data) {
  //           // console.log(i)
  //           if (i.ass_id === _id) {
  //             console.log("Assignment already submitted");
  //             setIsDisabled(true);
  //           }
  //         }
  //       }
  //     });
  // }, []);

  //   const handleSubmitAssignment = (e) => {
  //     e.preventDefault();

  //     const form = e.target;
  //     const linkSubmit = form.linkSubmit.value;
  //     const noteText = form.noteText.value;
  //     const user_email = user?.email;
  //     const user_name = user?.displayName;
  //     const ass_id = assignDetails._id;
  //     const ass_title = assignDetails.title;
  //     const ass_descriptions = assignDetails.description;
  //     const ass_marks = assignDetails.marks;
  //     const ass_label = assignDetails.ass_lavel;
  //     const owener_email = assignDetails.user_email;
  //     const ass_image = assignDetails.image_url;
  //     const status = "pending";
  //     const mark = "pending";
  //     const feedback = "pending";

  //     const submitData = {
  //       linkSubmit,
  //       mark,
  //       feedback,
  //       user_name,
  //       ass_image,
  //       ass_id,
  //       ass_title,
  //       ass_descriptions,
  //       owener_email,
  //       ass_marks,
  //       ass_label,
  //       noteText,
  //       user_email,
  //       status,
  //     };
  //     console.log(submitData);

  //     axios
  //       .post(
  //         `https://crud-and-jwt-server-nine.vercel.app/assingment`,
  //         submitData,
  //         { withCredentials: true }
  //       )
  //       .then((data) => {
  //         console.log(data.data);
  //         if (data.data.insertedId) {
  //           Swal.fire({
  //             title: "Successfull",
  //             text: "Assignment submit Successfully.",
  //             icon: "success",
  //           });
  //           navigate("/myAssignment");
  //         }
  //       });
  //   };

  //   const handleModal = () => {
  //     document.getElementById("my_modal_3").showModal();
  //   };

  return (
    // <div className="border-2 my-10 p-10">
    //   <div className="text-center space-y-3">
    //     <h3 className="text-3xl font-bold">Assignment Details </h3>
    //     <p className="text-xl">Lorem, ipsum dolor.</p>
    //   </div>

    //   <div className="text-base">
    //     <h2 className="">Assignment Name : {title}</h2>
    //     <p className=""> Description : {description}</p>
    //     <p className=""> Total Marks : {marks}</p>
    //     <p className=""> Difficult level : {ass_laval}</p>
    //     <p className="">
    //       {" "}
    //       Create Date : {new Date(create_date).toLocaleDateString()}
    //     </p>

    //     <button
    //       className="btn bg-orange-600 text-white text-xl"
    //       disabled={isDisabled}
    //       onClick={() => handleModal()}
    //     >
    //       Take Assignment
    //     </button>
    //     <dialog id="my_modal_3" className="modal">
    //       <div className="modal-box">
    //         <form method="dialog">
    //           {/* if there is a button in form, it will close the modal */}
    //           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
    //             ✕
    //           </button>
    //         </form>
    //         <form onSubmit={handleSubmitAssignment}>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="font-bold text-xl">Pdf/Doc link</span>
    //             </label>
    //             <textarea
    //               type="text"
    //               name="linkSubmit"
    //               placeholder="pdf or doc link here"
    //               className="input input-bordered h-20 resize-none"
    //               required
    //             />
    //           </div>

    //           <div className="form-control">
    //             <label className="label">
    //               <span className="font-bold text-xl">Note text</span>
    //             </label>
    //             <input
    //               type="text"
    //               name="noteText"
    //               placeholder="quick note text"
    //               className="input input-bordered"
    //               required
    //             />
    //           </div>
    //           <button className="w-full btn my-5 bg-orange-600 text-white">
    //             Submit
    //           </button>
    //         </form>
    //       </div>
    //     </dialog>
    //   </div>

    //   {/* <div className="grid grid-cols-1 m-3">
    //     <img className="w-full lg:h-full" src={image_url} alt="" />
    //   </div> */}
    // </div>

    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <img
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src={image_url}
              alt=""
            />

            <div>
              <h1 className="max-w-lg mt-4 text-3xl font-semibold leading-tight text-blue-500 uppercase dark:text-white">
                Name : {title}
              </h1>
              <p className="mt-2">
                <span className="font-semibold">Short Description :</span>{" "}
                {description}
              </p>

              <p className="mt-6 text-base uppercase">
                Contact Assignment Creator
              </p>
              <div className="flex items-center mt-2">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src={creator.owner_img}
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    {creator.ass_owner}
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {creator.owner_email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <div>
              <h3 className="text-blue-500 capitalize text-xl">
                About Assignment
              </h3>

              <p className="block mt-2 font-medium text-gray-700  hover:text-gray-500 dark:text-gray-400 ">
                Difficult laval : {ass_laval}
              </p>

              <p className="block mt-2 font-medium text-gray-700  hover:text-gray-500 dark:text-gray-400 ">
                Total Marks : {marks}
              </p>

              <p className="block mt-2 font-medium text-gray-700  hover:text-gray-500 dark:text-gray-400 ">
                Create date : {new Date(create_date).toLocaleDateString()}
              </p>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-blue-500 capitalize">Premium kits</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Top 10 Ui kit you can get on Blox's collection.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssignmentDetails;
