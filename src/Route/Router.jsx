
import { createBrowserRouter } from "react-router-dom";
import Root from './../Root/Root';
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import HomePage from './../Pages/HomePage/HomePage';
import LoginPage from './../Pages/LoginPage/LoginPage';
import RegisterPage from './../Pages/RegisterPage/RegisterPage';
import CreateAssignmentPage from './../Pages/CreateAssignment/CreateAssignmentPage';
import Assignments from "../Pages/Assignment/Assignments";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import AssignmentUpdate from "../Pages/AssignmentUpdate/AssignmentUpdate";
import MyAssignment from "../Pages/SubmitMyAssignment/MyAssignment";
import PendingAssignment from "../Pages/PendingAssignment/PendingAssignment";
import PrivateRouter from "./PrivateRouter";
import axios from "axios";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Root/>,
        errorElement : <ErrorPage/>,
        children : [
            {
                path : "/",
                element : <HomePage/>
            },

            {
                path : "/login",
                element : <LoginPage/>
            },

            {
                path : "/register",
                element : <RegisterPage/>
            },

            {
                path : "/assignments",
                element : <Assignments/>,
                loader : () => fetch(`http://localhost:5000/assignments`, {credentials : "include"})
            },

            {
                path : "/assignmentsDetails/:id",
                element : <PrivateRouter><AssignmentDetails/></PrivateRouter>,
                loader : ({params}) => fetch(`http://localhost:5000/assignments/${params.id}`, {credentials : "include"})
            },

            {
                path : "/createTask",
                element : <PrivateRouter><CreateAssignmentPage/></PrivateRouter>
            },

            {
                path : "/assignmentUpdate/:id",
                element : <PrivateRouter><AssignmentUpdate/></PrivateRouter>,
                loader : ({params}) => (`http://localhost:5000/assignments/${params.id}`, {credentials:"include"})
            },

            {
                path : "/myAssignment",
                element : <PrivateRouter><MyAssignment/></PrivateRouter>
            },

            {
                path : "/pendingTask/:email",
                element : <PrivateRouter><PendingAssignment/></PrivateRouter>,
                loader : ({params}) => fetch(`http://localhost:5000/pendingList/${params.email}`, {credentials : "include"})
            }
        ]
    }
])


export default router