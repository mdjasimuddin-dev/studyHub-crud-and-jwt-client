import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";

const CreateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [laval, setLaval] = useState("");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state | "/";

  const handleCreateAssignment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const image_url = form.image_url.value;
    const ass_owner = form.userEmail.value;
    const ass_laval = laval;
    const create_date = startDate;

    const assignmentData = {
      title,
      description,
      marks,
      image_url,
      ass_laval,
      create_date,
      creator: {
        ass_owner: user?.displayName,
        owner_email: ass_owner,
        owner_img: user?.photoURL,
      },
    };
    console.log(assignmentData);

    try {
      const { data } = await axiosSecure.post(`/createAssign`, assignmentData);
      console.log(data);

      if (data.insertedId) {
        Swal.fire({
          title: "Successful",
          text: "New Assignment Added Successfully.",
          icon: "success",
        });
      }

      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:border-2 md:mb-10 pt-10">
      <h3 className="text-2xl font-bold text-center">Assignment Create</h3>
      <p className="text-xl text-center p-2 px-10 text-orange-500">
        Create Your assignment and share other user
      </p>

      <form
        onSubmit={handleCreateAssignment}
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
              onChange={(e) => setLaval(e.target.value)}
              className="p-3 rounded-xl border-2"
            >
              <option className="p-4" value="" disabled>
                Chosse an options
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
              defaultValue={user?.email}
              name="userEmail"
              placeholder="User email"
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
              placeholder="Input marks"
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
            placeholder="Thumbnail Image URL"
            className="input input-bordered"
            required
          />
        </div>

        <button className="btn bg-orange-600 text-white w-full lg:w-auto md:mx-auto mt-5 lg:mt-10 font-bold text-xl">
          Create Assignment
        </button>
      </form>
    </div>
  );
};

export default CreateAssignment;
