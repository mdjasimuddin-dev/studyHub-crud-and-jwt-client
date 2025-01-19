import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";

const UpdateAssignment = () => {
  const { _id, ass_laval, title, description, marks, image_url } =
    useLoaderData();

  const ass_data = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  const [option, setOption] = useState(ass_laval);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();

  console.log(option);
  console.log(ass_data);

  const handleUpdateAssignment = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const image_url = form.image_url.value;
    const ass_laval = option;

    const updateAssignment = {
      title,
      description,
      marks,
      image_url,
      ass_laval,
      last_update: {
        user_name: user?.displayName,
        user_email: user?.email,
        date: startDate,
      },
    };
    console.log(updateAssignment);

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const { data } = await axiosSecure.put(
          `/updateAssign/${_id}`,
          updateAssignment
        );

        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire("Saved!", "", "success");
          navigate("/assignments");
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="lg:border-2 md:mb-10 pt-10">
      <h3 className="text-2xl font-bold text-center">Assignment Edit</h3>
      <p className="text-xl text-center p-2 px-10 text-orange-500">
        Edit Your assignment and share others user
      </p>

      <form
        onSubmit={handleUpdateAssignment}
        className="p-2 lg:card-body md:space-y-3"
      >
        {/* assignment name or date  */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10">
          {/* title  */}
          <div className="form-control gird col-span-3">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              placeholder="Enter Assignment title name."
              className="input input-bordered"
              required
            />
          </div>

          {/* date  */}
          <div className="form-control grid grid-cols-1">
            <label className="label">
              <span className="label-text">Date</span>
            </label>

            <DatePicker
              className="w-full p-3 border-2 border-base-300"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>

        {/* description  */}
        <div className="form-control">
          <label className="label">
            <span className="">Description</span>
          </label>
          <textarea
            type="text"
            name="description"
            defaultValue={description}
            placeholder="Descriptions"
            className="input input-bordered h-20 resize-none"
            required
          />
        </div>

        {/* laval & email  */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
          {/* laval select */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Difficulty label</span>
            </label>
            <select
              onChange={(e) => setOption(e.target.value)}
              className="p-3 rounded-xl border-2"
              value={option}
            >
              <option className="p-4" disabled>
                Choose options
              </option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* user email  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              defaultValue={user.email}
              name="userEmail"
              placeholder="Enter user email."
              className="input input-bordered"
              required
            />
          </div>

          {/* Marks  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Marks</span>
            </label>
            <input
              type="text"
              name="marks"
              defaultValue={marks}
              placeholder="Enter assignment marks."
              className="input input-bordered"
              required
            />
          </div>
        </div>

        {/* image url  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Thumbnail Image URL</span>
          </label>
          <input
            type="text"
            name="image_url"
            defaultValue={image_url}
            placeholder="Thumbnail Image URL"
            className="input input-bordered"
            required
          />
        </div>

        <button className="btn bg-orange-600 text-white w-full lg:w-auto md:mx-auto mt-5 lg:mt-10 font-bold text-xl">
          Save Change
        </button>
      </form>
    </div>
  );
};

export default UpdateAssignment;
