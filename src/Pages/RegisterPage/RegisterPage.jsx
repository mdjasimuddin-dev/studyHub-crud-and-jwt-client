
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import axios from "axios";


const RegisterPage = () => {

    const { userCreate } = useAuth()
    const navigate = useNavigate()


    const handleUserCreate = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const Accepted = form.terms.checked;
        const user = { name, email, password, Accepted }
        console.log(user)

        if (!Accepted) {
            console.log("Please Accept terms and coditions")
            return
        }

        userCreate(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const {data} = axios.post('https://crud-and-jwt-server-nine.vercel.app/jwt', {email : result?.user?.email}, {withCredentials : true})
                console.log("token",data)
                if (user) {
                    updateProfile(user, {
                        displayName: name
                    })
                        .then(() => {
                            console.log("profile update done")
                        })
                        .catch(err => console.log(err))
                    navigate(location.state ? location.pathname : "/")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    // const handleUserCreate = (e) => {
    //     e.preventDefault()

    //     const form = e.target
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const Accepted = form.terms.checked;

    //     const user = { name, email, password, Accepted }
    //     console.log(user)


    //     if (!Accepted) {
    //         console.log("Please Accept terms and coditions")
    //         return
    //     }


    //     userCreate(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user)
    //             if (user) {
    //                 updateProfile(user, {
    //                     displayName: name
    //                 })
    //                     .then(() => {
    //                         console.log("profile update done")
    //                     })
    //                     .catch(err => console.log(err))
    //                 navigate(location.state ? location.pathname : "/")
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }


    return (
        <div className=''>
            <div className="hero min-h-[660px]">
                <div className="hero-content grid grid-cols-5 gap-10">

                    {/* left sider login options bar  */}
                    <div className="bg-[#070F2B] text-white min-h-[650px] lg:flex justify-center items-center grid col-span-2 p-5">
                        <div className="text-center lg:text-left px-4">
                            <div className='flex items-center justify-center mb-5'>
                                <img className='h-16 w-16' src="https://i.postimg.cc/J44zYSqz/file.png" alt="" />
                                <h1 className="text-5xl font-bold">Study<span className="font-bold text-orange-600">Hub</span></h1>
                            </div>
                            <p className="py-5 text-xl text-center">Login using social media to get quick access</p>

                            <Link className="flex items-center my-2 btn bg-red-500 text-white"><FaGoogle /> Login with google</Link>

                            <Link className="flex my-2 items-center btn bg-[#282886] text-white"><FaGithub /> Login with github</Link>

                            <Link className="flex items-center btn bg-blue-600 text-white"><FaFacebookF /> Login with facebook</Link>
                        </div>
                    </div>

                    {/* lright side login input box  */}
                    <div className='grid col-span-3 bg-base-200 p-10'>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold mb-4">Sign up for free!</h1>
                        </div>

                        <div className="card shrink-0 bg-base-100 mt-10">
                            <form onSubmit={handleUserCreate} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Full name" className="input input-bordered" required />
                                </div>

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
                                </div>

                                <div className="flex items-center">
                                    <input type="checkbox" name="terms" className="mr-2" />
                                    <p className="my-2">I agree to the <span className="text-blue-600 underline cursor-pointer">privacy policy</span> and <span className="text-blue-600 underline cursor-pointer">terms of service</span>.</p>
                                </div>


                                <div className="form-control mt-6">
                                    <button className="btn bg-orange-600 text-white font-bold text-xl">Sign Up</button>

                                    <p className="text-xl text-center font-xl">Already have an account? <Link to="/login" className="text-blue-600 text-xl font-bold">login</Link></p>
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