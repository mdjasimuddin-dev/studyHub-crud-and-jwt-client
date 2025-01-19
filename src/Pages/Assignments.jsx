import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
// import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaEye } from "react-icons/fa";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getData();
  }, [filter]);

  const getData = async () => {
    const { data } = await axiosSecure(`/assignments?filter=${filter}`);
    console.log(data);
    setAssignments(data);
  };

  console.log(assignments);

  const handleDelete = async (id, ass_owner) => {
    console.log(id, ass_owner);

    try {
      if (user?.email === ass_owner) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/deleteAssign/${id}`).then((res) => {
              if (res.data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }

              getData();
            });
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Only the user who created it can delete it.!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handleAssignmentFilter = (value) => {
  //   console.log(value);
  //   setFilter();
  // };

  console.log(filter);

  return (
    <div className="my-10">
      <h1 className="text-base lg:text-5xl font-bold text-center">
        Total Assignment : {assignments.length}
      </h1>
      <hr className="h-1 bg-base-300 m-4" />

      {/* assignment filter functionality  */}
      <div className="flex my-4">
        <h1 className="text-base lg:text-2xl font-bold m-2">
          Assignment filter{" "}
        </h1>
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="select select-bordered text-base join-item lg:w-32"
        >
          <option value="">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* assignment view table  */}
      <div className="overflow-x-auto border border-gray-200 lg:my-10  md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {/* image  */}
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
              >
                <div className="flex items-center gap-x-3">Image</div>
              </th>

              {/* title  */}
              <th
                scope="col"
                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
              >
                <span>Title</span>
              </th>

              {/* laval  */}
              <th
                scope="col"
                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
              >
                Laval
              </th>

              {/* view  */}
              <th
                scope="col"
                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
              >
                View
              </th>

              {/* Edit  */}
              <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                Edit
              </th>

              {/* delete  */}
              <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                Delete
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200 ">
            {assignments?.map((assignment) => (
              <tr key={assignment._id}>
                {/* assignment image  */}
                <td>
                  <img
                    src={assignment.image_url}
                    className="w-20 h-full"
                    alt=""
                  />
                </td>

                {/* assignment title  */}
                <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                  {assignment.title}
                </td>

                {/* assignment laval  */}
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                  <div className="flex items-center gap-x-2">
                    <p
                      className={`px-3 py-1 ${
                        assignment.ass_laval === "Easy" &&
                        " text-emerald-500 bg-emerald-100/60"
                      } ${
                        assignment.ass_laval === "Medium" &&
                        "text-blue-500 bg-blue-100/60"
                      } ${
                        assignment.ass_laval === "Hard" &&
                        "text-pink-500 bg-pink-100/60"
                      } text-xs  rounded-full`}
                    >
                      {assignment.ass_laval}
                    </p>
                  </div>
                </td>

                {/* assignment details  */}
                <td className="px-4 py-4 text-sm text-gray-500 flex  whitespace-nowrap">
                  <Link
                    to={`/assignmentsDetails/${assignment._id}`}
                    className="text-gray-500 flex gap-x-2 transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
                  >
                    <button>
                      <FaEye size={20} className="hover:text-red-200" />
                    </button>
                    <p className="hidden lg:flex">View</p>
                  </Link>
                </td>

                {/* assignment update  */}
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                  <div className=" items-center ">
                    <Link
                      to={`/updateTask/${assignment._id}`}
                      className="text-gray-500 flex gap-x-2 transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                      <p className="hidden lg:flex">Edit</p>
                    </Link>
                  </div>
                </td>

                {/* assignment details  */}
                <td className="">
                  <button
                    onClick={() =>
                      handleDelete(assignment._id, assignment.ass_owner)
                    }
                    className="text-gray-500 flex gap-x-2 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>

                    <p className="hidden lg:flex">Remove</p>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assignments;
