import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Home from "../../Pages/Home/Home/Home";
import MyReviewes from "../../Pages/MyReviewes/MyReviewes";
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
      }
    ]
  }
])