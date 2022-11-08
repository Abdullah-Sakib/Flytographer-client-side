import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviewes from "../../Pages/MyReviewes/MyReviewes";
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
        element: <PrivetRoute><ServiceDetails></ServiceDetails></PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
      }
    ]
  }
])