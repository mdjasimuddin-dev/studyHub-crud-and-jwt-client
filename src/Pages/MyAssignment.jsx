import { useState } from "react";
import { useEffect } from "react";
// import Swal from 'sweetalert2';
import useAuth from "../Hooks/useAuth";
import { FaEye } from "react-icons/fa";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyAssignment = () => {
  const { user } = useAuth();
  const [assign, setAssign] = useState([]);
  const [preview, setPreview] = useState();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    getAssign();
  }, []);

  const getAssign = async () => {
    const { data } = await axiosSecure.get(`/MyAssignList/${user?.email}`);
    console.log(data);
    setAssign(data);
  };

  //   useEffect(() => {
  //     fetch(
  //       `https://crud-and-jwt-server-nine.vercel.app/MyAssignList/${user?.email}`,
  //       { credentials: "include" }
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log(data)
  //         setAssign(data);
  //       });
  //   }, [user]);

  const handleDocPreview = (link) => {
    document.getElementById("preview_modal").showModal();
    console.log(link);
    setPreview(link);
  };

  return (
    <div className="lg:mb-24 my-5">
      <h1 className="text-center text-3xl lg:text-4xl font-bold py-4">
        My Assignment List
      </h1>
      <hr className="h-1 bg-gray-400" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 lg:mt-10 m-2">
        {assign?.map((item) => (
          <div key={item._id}>
            {/* <h1>This is sumitted assignment id : {item._id}</h1> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 p-2 shadow-xl border-2 ">
              <div>
                <img
                  src={item.image_url}
                  alt="Assignment image"
                  className="h-full "
                />
              </div>

              <div className="space-y-2 lg:px-4 lg:col-span-2">
                <div className="flex justify-between items-center">
                  <p className="">Difficult laval : {item.ass_laval}</p>
                  <p className=" text-white bg-orange-600 rounded-md p-2">
                    {item.status}
                  </p>
                </div>
                <h2 className="card-title font-bold text-2xl">
                  {item.title.length > 20
                    ? item.title.slice(0, 20) + "..."
                    : item.title}
                </h2>

                <div className="flex justify-between">
                  <p className="">Your mark : {item.ass_mark}</p>
                  <h1 className=""> Total mark : {item.marks}</h1>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleDocPreview(item.submit.link)}
                    className="justify-center btn bg-blue-500 text-white mr-4"
                  >
                    <span>
                      <FaEye />
                    </span>
                    Preview
                  </button>
                  <h1 className="bg-orange-400 p-2 flex-grow">
                    feedback : {item.ass_feedback}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <dialog id="preview_modal" className="modal p-5">
        <div className="modal-box">
          {/* w-full lg:p-10 lg:m-24 bg-white lg:w-2/3 lg:rounded-3xl relative*/}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div>
            <h1 className="text-2xl font-bold text-center">
              Assignment Doc Preview
            </h1>
            <hr className="bg-base-300 my-4" />
            <div>
              <iframe
                className="w-full h-screen"
                src={preview}
                title={`PDF Preview`}
                height="100%"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyAssignment;
