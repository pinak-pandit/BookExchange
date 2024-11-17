import {
    createBrowserRouter,
    RouterProvider,
    useParams,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home"
import Exchange from "../Exchange/Exchange";
import About from "../components/About";
import SingleBook from "../components/Singlebook";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Signup from "../components/Signup";
import { DashboardLayout } from "../Dashboard/DashboardLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";
import UploadBook from "../Dashboard/UploadBook";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: "/exchange",
            element: <Exchange/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
          path: "/book/:id",
          element: <SingleBook/>,
          loader: ({params}) => fetch(`http://localhost:5000/book//${params.id}`)
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "/create-user",
          element: <Signup/>
        },
        {
          path:"/logout",
          element: <Logout/>
        },
        {
          path: "/user/dashboard",
          element: <DashboardLayout />,
          children: [
            { path: "/user/dashboard", element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>},
            { path: "/user/dashboard/upload", element: <UploadBook /> },
            { path: "/user/dashboard/manage", element: <ManageBooks /> },
            { path: "/user/dashboard/edit-books/:id", element: <EditBooks />,
            loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
          },
          ],
        },
      ]
    },
  ]);

  export default router;
