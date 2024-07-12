
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";



const LoginPage = () => {

    const {signInGoogle, userLoginWithPassword} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()



    // const handleGoogleSingIn = (e) => {
    //     e.preventDefault()
    //     signInGoogle()
    //         .then(result => {
    //             console.log(result.user)
    //             // if(logged){
    //             //     navigate(location.state ? location.state : "/")
    //             // }
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    const handleGoogleSingIn = async() => {
        try {
            const result = await signInGoogle()
            await axios.post('https://crud-and-jwt-server-nine.vercel.app/jwt', {email : result?.user?.email}, {withCredentials: true})
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }


    const signInWithPassword = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

        userLoginWithPassword(email, password)
        .then(result => {
            console.log("User login successfull", result)
            axios.post(`https://crud-and-jwt-server-nine.vercel.app/jwt`, {email : result?.user?.email}, {withCredentials : true})
            navigate(location?.state ? navigate.state : "/")
        })
        .catch(err => {
            console.log(err)
        })
    }



    return (
        <div className=''>
            <div className="hero min-h-[660px]">
                <div className="hero-content grid grid-cols-5 gap-10">

                    {/* left sider login options bar  */}
                    <div className="bg-[#070F2B] text-white min-h-[550px] lg:flex justify-center items-center grid col-span-2 p-5">
                        <div className="text-center lg:text-left px-4">
                            <div className='flex items-center justify-center mb-5'>
                                <img className='h-16 w-16' src="https://i.postimg.cc/J44zYSqz/file.png" alt="" />
                                <h1 className="text-5xl font-bold">Study<span className="font-bold text-orange-600">Hub</span></h1>
                            </div>
                            <p className="py-5 text-xl text-center">Login using social media to get quick access</p>

                            <Link onClick={handleGoogleSingIn} className="flex items-center my-2 btn bg-red-500 text-white"><FaGoogle /> Login with google</Link>

                            <Link className="flex my-2 items-center btn bg-[#282886] text-white"><FaGithub /> Login with github</Link>

                            <Link className="flex items-center btn bg-blue-600 text-white"><FaFacebookF /> Login with facebook</Link>
                        </div>
                    </div>

                    {/* lright side login input box  */}
                    <div className='grid col-span-3 bg-base-200 p-10'>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold mb-4">Login to your account</h1>
                            <p className="text-xl">Dont have an account? <Link to="/register" className="text-blue-600 text-xl font-bold">SignUp free!</Link></p>
                        </div>

                        <div className="card shrink-0 bg-base-100 mt-10">
                            <form onSubmit={signInWithPassword} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email Address" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-orange-600 text-white font-bold text-xl">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;