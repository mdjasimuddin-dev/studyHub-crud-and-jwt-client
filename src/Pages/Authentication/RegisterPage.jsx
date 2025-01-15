import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SocialLogin from "./SocialLogin";

const RegisterPage = () => {
  const { createUser, updateUserProfile, user, setUser } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const from = location.state || "/";

  console.log(location);

  const handleUserCreate = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const Accepted = form.terms.checked;
    const user = { name, email, photo, password, Accepted };
    console.log(user);

    if (!Accepted) {
      Swal.fire({
        icon: "error",
        title: "Accept our rules",
        text: "Please accept terms & conditions!",
      });
      return;
    }

    try {
      const result = await createUser(email, password);
      console.log(result?.user);
      //1. User Registration
      await updateUserProfile(name, photo);

      // Optimistic UI Update
      setUser({ ...result?.user, displayName: name, photoURL: photo });

      // Token Create
      const { data } = axiosSecure.post(`/jwt`, { email: result?.user?.email });
      console.log(data);

      // Success Alert
      if (result?.user) {
        Swal.fire({
          title: "Successfull",
          text: "Profile Create successfull.",
          icon: "success",
        });
      }

      //   go to worked page
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
    //   .then((result) => {
    //     const user = result.user;
    //     // console.log(user)
    //     axiosSecure.post(`/jwt`, { email: result?.user?.email });
    //     if (user) {
    //       updateProfile(user, {
    //         displayName: name,
    //       })
    //         .then(() => {
    //           // console.log("profile update done")
    //           if (result?.user) {
    //             Swal.fire({
    //               title: "Successfull",
    //               text: "Profile Create successfull.",
    //               icon: "success",
    //             });
    //           }
    //         })
    //         .catch((err) => console.log(err));
    //       navigate(location.state ? location.pathname : "/");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div>
      <div className="lg:min-h-[660px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-10">
          {/* left slider login options bar  */}
          <SocialLogin />

          {/* right side login input box  */}
          <div className="grid col-span-3 bg-base-200 p-4 lg:p-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Sign up for free!</h1>
              <p className="text-xl text-center font-xl">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 text-xl font-bold">
                  login
                </Link>
              </p>
            </div>

            <div className="card shrink-0 bg-white mt-10">
              <form onSubmit={handleUserCreate} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Enter your profile photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="flex items-center">
                  <input type="checkbox" name="terms" className="mr-2" />
                  <p className="my-2">
                    I agree to the{" "}
                    <span className="text-blue-600 underline cursor-pointer">
                      privacy policy
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-600 underline cursor-pointer">
                      terms of service
                    </span>
                    .
                  </p>
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-orange-600 text-white font-bold text-xl">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
