
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {


    const {user, logOut} = useAuth()

    const handleLogout = () => {
        logOut()
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Registration</NavLink></li>
        <li><NavLink to='/assignments'>Assignments</NavLink></li>

        { user? 
            <>
                <li><NavLink to='/createTask'>Create Assignment</NavLink></li>
                <li><NavLink to='/pendingTask'>Pending Assignment</NavLink></li>
            </>
            : null
        }

    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="mr-1 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>

                    <img className='h-24 w-24 hidden lg:flex' src="https://i.postimg.cc/J44zYSqz/logo.png" alt="" />
                    <a className="text-xl lg:text-5xl font-bold">Study<span className="font-bold text-orange-600">Hub</span></a>


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="flex justify-end flex-1 px-2">
                    <div className="flex items-stretch">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
                                <FaUserCircle  className='h-8 w-8'/>
                            </div>
                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                <li><Link className='btn'>Attempt</Link></li>
                                <li><Link className='btn'>Assignment</Link></li>
                                <li><Link onClick={handleLogout} className='btn'>logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;