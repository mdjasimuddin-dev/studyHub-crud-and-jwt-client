import { createBrowserRouter } from "react-router-dom";
import Root from "./../Root/Root";
import ErrorPage from "./../Pages/ErrorPage/ErrorPage";
import HomePage from "./../Pages/HomePage/HomePage";
import LoginPage from "../Pages/Authentication/LoginPage";
import RegisterPage from "../Pages/Authentication/RegisterPage";
import CreateAssignmentPage from "./../Pages/CreateAssignment/CreateAssignmentPage";
import Assignments from "../Pages/Assignment/Assignments";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import AssignmentUpdate from "../Pages/AssignmentUpdate/AssignmentUpdate";
import MyAssignment from "../Pages/SubmitMyAssignment/MyAssignment";
import PendingAssignment from "../Pages/PendingAssignment/PendingAssignment";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
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
          fetch(
            `https://crud-and-jwt-server-nine.vercel.app/assignments/${params.id}`,
            { credentials: "include" }
          ),
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
        path: "/assignmentUpdate/:id",
        element: (
          <PrivateRouter>
            <AssignmentUpdate />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://crud-and-jwt-server-nine.vercel.app/assignments/${params.id}`,
            { credentials: "include" }
          ),
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
