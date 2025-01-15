import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleGoogleSingIn = async () => {
    try {
      const result = await signInWithGoogle();
      const { data } = await axiosPublic.post(`/jwt`, {
        email: result?.user?.email,
      });

      console.log(result?.user);
      console.log(data);

      if (result?.user) {
        Swal.fire({
          title: "Successful",
          text: "User login successful.",
          icon: "success",
        });
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#070F2B] rounded-lg text-white lg:min-h-[550px] items-center p-5 lg:grid lg:col-span-2">
      <div className="text-center lg:text-left px-4">
        <div className="flex items-center justify-center mb-5">
          <img
            className="h-16 w-16"
            src="https://i.postimg.cc/J44zYSqz/file.png"
            alt=""
          />
          <h1 className="text-5xl font-bold">
            Study<span className="font-bold text-orange-600">Hub</span>
          </h1>
        </div>
        <p className="py-5 text-xl text-center">
          Login using social media to get quick access
        </p>

        <Link
          onClick={handleGoogleSingIn}
          className="flex items-center my-2 btn bg-red-500 text-white"
        >
          <FaGoogle /> Login with google
        </Link>
        <Link className="flex my-2 items-center btn bg-[#282886] text-white">
          <FaGithub /> Login with github
        </Link>
        <Link className="flex items-center btn bg-blue-600 text-white">
          <FaFacebookF /> Login with facebook
        </Link>
      </div>
    </div>
  );
};

export default SocialLogin;
