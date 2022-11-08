import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviewes from "../../Pages/MyReviewes/MyReviewes";
import Registration from "../../Pages/Registration/Registration";
import Services from "../../Pages/Services/Services";

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
        element: <MyReviewes></MyReviewes>
      },
      {
        path: 'addservice',
        element: <AddService></AddService>
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Registration></Registration>
      }
    ]
  }
])