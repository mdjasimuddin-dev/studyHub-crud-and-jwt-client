import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const AssignmentDetails = () => {
  const assignDetails = useLoaderData();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  //   const navigate = useNavigate();

  const {
    _id,
    title,
    description,
    marks,
    ass_laval,
    create_date,
    image_url,
    creator,
  } = assignDetails;
  //   // console.log(_id, )

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    getAssign();
  }, [isDisabled]);

  const getAssign = async () => {
    const { data } = await axiosSecure.get(`/MyAssignList/${user?.email}`, {
      withCredentials: true,
    });
    console.log(data);
    for (let ass of data) {
      // console.log(ass);
      if (ass.ass_Id === _id && ass.submit.email === user?.email) {
        setIsDisabled(true);
      }
    }
  };

  const handleSubmitAssignment = async (e) => {
    e.preventDefault();

    const form = e.target;
    const linkSubmit = form.linkSubmit.value;
    const noteText = form.noteText.value;
    const ass_Id = _id;

    const user_email = user?.email;
    const user_name = user?.displayName;
    const user_image = user?.photoURL;

    const owner_email = creator.owner_email;
    const owner_name = creator.ass_owner;
    const owner_image = creator.owner_img;

    const status = "pending";
    const ass_mark = "pending";
    const ass_feedback = "pending";

    const ass_SubmitData = {
      title,
      description,
      marks,
      image_url,
      ass_laval,
      ass_Id,

      owner: {
        owner_name,
        owner_image,
        owner_email,
      },

      submit: {
        name: user_name,
        email: user_email,
        image: user_image,
        note: noteText,
        link: linkSubmit,
      },

      status,
      ass_mark,
      ass_feedback,
    };
    console.log(ass_SubmitData);

    const { data } = await axiosSecure.post(`/assignment`, ass_SubmitData);
    console.log(data);
    if (data.insertedId) {
      Swal.fire({
        title: "Successful",
        text: "Assignment submit Successfully.",
        icon: "success",
      });
      // navigate("/myAssignment");
    }
  };

  const handleModal = () => {
    document.getElementById("my_modal_3").showModal();
  };

  console.log("button Status : ", isDisabled);

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
          {/* right side  */}
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
            </div>
          </div>

          {/* left side  */}
          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            {/* about assignment  */}
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

            {/* plane text  */}
            <div>
              <h3 className="text-blue-500 capitalize">Premium kits</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                Top 10 Ui kit you can get on Blox's collection.
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            {/* assignment creator  */}
            <div>
              <p className="text-base uppercase">Assignment Creator</p>
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

            <div>
              <button
                className={`btn bg-orange-600 text-white text-xl my-4 mx-auto`}
                disabled={isDisabled}
                onClick={() => handleModal()}
              >
                Take Assignment
              </button>

              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>

                  {/* onSubmit={handleSubmitAssignment} */}
                  <form onSubmit={handleSubmitAssignment}>
                    <div className="form-control">
                      <label className="label">
                        <span className="font-bold text-xl">Pdf/Doc link</span>
                      </label>
                      <textarea
                        type="text"
                        name="linkSubmit"
                        placeholder="pdf or doc link here"
                        className="input input-bordered h-20 resize-none"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="font-bold text-xl">Note text</span>
                      </label>
                      <input
                        type="text"
                        name="noteText"
                        placeholder="quick note text"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <button className="w-full btn my-5 bg-orange-600 text-white">
                      Submit
                    </button>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>

        {/* Explore studyHub  */}
        <p className="flex text-justify py-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          pariatur facere architecto consectetur sequi. Autem voluptates
          sapiente fugit doloremque mollitia deserunt voluptas quo cumque
          debitis. Earum, illum ipsum? Explicabo ex voluptatibus vitae soluta,
          minima architecto facere odio tenetur rerum iste, cum distinctio porro
          facilis neque perferendis illum laudantium. Nam fuga eligendi,
          accusamus rerum dignissimos voluptatibus suscipit. Consequuntur, enim,
          aliquam facilis eos voluptates molestias dignissimos nisi nobis sed et
          maxime doloribus qui totam obcaecati quasi delectus quod magni?
          Consequatur consequuntur cum perspiciatis. Sequi libero dignissimos
          temporibus assumenda asperiores ipsa nobis eligendi a esse! Numquam
          ullam fuga necessitatibus cupiditate quis non quod.
        </p>
      </div>
    </section>
  );
};

export default AssignmentDetails;
