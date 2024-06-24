
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
                loader : () => fetch(`http://localhost:5000/assignments`)
            },

            {
                path : "/assignmentsDetails/:id",
                element : <AssignmentDetails/>,
                loader : ({params}) => fetch(`http://localhost:5000/assignments/${params.id}`)
            },

            {
                path : "/createTask",
                element : <CreateAssignmentPage/>
            },

            {
                path : "/assignmentUpdate/:id",
                element : <AssignmentUpdate/>,
                loader : ({params}) => fetch(`http://localhost:5000/assignments/${params.id}`)
            }
        ]
    }
])


export default router