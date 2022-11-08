import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviewes from "../../Pages/MyReviewes/MyReviewes";
import UpdateReviewPage from "../../Pages/MyReviewes/UpdateReviewPage";
import Registration from "../../Pages/Registration/Registration";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'services',
        element: <Services></Services>
      },
      {
        path: 'myreviewes',
        element: <PrivetRoute><MyReviewes></MyReviewes></PrivetRoute>
      },
      {
        path: 'addservice',
        element: <PrivetRoute><AddService></AddService></PrivetRoute>
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Registration></Registration>
      },
      {
        path: 'serviceDetails/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`https://flytographer-server.vercel.app/service/${params.id}`)
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'updateReview/:id',
        element: <UpdateReviewPage></UpdateReviewPage>,
        loader: ({params}) => fetch(`https://flytographer-server.vercel.app/review/${params.id}`)
      }
    ]
  }
])