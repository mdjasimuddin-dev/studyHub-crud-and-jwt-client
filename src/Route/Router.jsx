
import { createBrowserRouter } from "react-router-dom";
import Root from './../Root/Root';
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import HomePage from './../Pages/HomePage/HomePage';
import LoginPage from './../Pages/LoginPage/LoginPage';
import RegisterPage from './../Pages/RegisterPage/RegisterPage';
import CreateAssignmentPage from './../Pages/CreateAssignment/CreateAssignmentPage';

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
                path : "/createTask",
                element : <CreateAssignmentPage/>
            }
        ]
    }
])


export default router