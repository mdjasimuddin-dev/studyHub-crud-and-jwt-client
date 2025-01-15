import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const LoginPage = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const signInWithPassword = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      // user Sign In
      const result = await signIn(email, password);
      console.log(result?.user);

      // User Token Create
      const { data } = await axiosPublic.post(`jwt`, {
        email: result?.user?.email,
      });
      console.log(data);

      if (result?.user) {
        Swal.fire({
          title: "Successfull",
          text: "User login successfull.",
          icon: "success",
        });
      }

      navigate(location?.state ? navigate.state : "/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="lg:min-h-[660px]">
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-10">
        {/* left side login section  */}
        <SocialLogin />

        {/* right side login part  */}
        <div className="lg:grid lg:col-span-3 bg-base-200 lg:p-10">
          <div className="text-center p-4">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Login to your account
            </h1>
            <p className="text-base lg:text-xl">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600 text-xl font-bold">
                SignUp free!
              </Link>
            </p>
          </div>

          <div className="card shrink-0 bg-white m-4">
            <form onSubmit={signInWithPassword} className="card-body">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-600 text-white font-bold text-xl">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
