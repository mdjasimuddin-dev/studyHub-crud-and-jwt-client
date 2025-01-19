import { createBrowserRouter } from "react-router-dom";
import Root from "./../Root/Root";
import LoginPage from "../Pages/Authentication/LoginPage";
import RegisterPage from "../Pages/Authentication/RegisterPage";
import PrivateRouter from "./PrivateRouter";
import HomePage from "../Pages/HomePage";
import Assignments from "../Pages/Assignments";
import AssignmentDetails from "../Pages/AssignmentDetails";
import CreateAssignmentPage from "../Pages/CreateAssignment";
import MyAssignment from "../Pages/MyAssignment";
import PendingAssignment from "../Pages/PendingAssignment/PendingAssignment";
import ErrorPage from "../Pages/ErrorPage";
import UpdateAssignment from "../Pages/UpdateAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "/login",
        element: <LoginPage />,
      },

      {
        path: "/register",
        element: <RegisterPage />,
      },

      {
        path: "/assignments",
        element: <Assignments />,
      },

      {
        path: "/assignmentsDetails/:id",
        element: (
          <PrivateRouter>
            <AssignmentDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_APP_URL}/assignments/${params.id}`, {
            credentials: "include",
          }),
      },

      {
        path: "/createTask",
        element: (
          <PrivateRouter>
            <CreateAssignmentPage />
          </PrivateRouter>
        ),
      },

      {
        path: "/updateTask/:id",
        element: (
          <PrivateRouter>
            <UpdateAssignment />
          </PrivateRouter>
        ),

        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_APP_URL}/assignments/${params.id}`, {
            credentials: "include",
          }),
      },

      {
        path: "/myAssignment",
        element: (
          <PrivateRouter>
            <MyAssignment />
          </PrivateRouter>
        ),
      },

      {
        path: "/pendingTask",
        element: (
          <PrivateRouter>
            <PendingAssignment />
          </PrivateRouter>
        ),
        loader: () =>
          fetch(`https://crud-and-jwt-server-nine.vercel.app/pendingList`, {
            credentials: "include",
          }),
      },
    ],
  },
]);

export default router;
