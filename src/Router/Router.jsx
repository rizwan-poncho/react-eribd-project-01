import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import Layout from "../Layout";
import ErrorPage from "../Pages/ErrorPage";
import AboutUs from "../Pages/AboutUs";
import Membership from "../Pages/Membership";
import NewsAndPublication from "../Pages/NewsAndPublication";
import Gallery from "../Pages/Gallery";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "*", element: <ErrorPage /> },
        { path: "/about-us", element: <AboutUs/>},
        { path: "/membership", element: <Membership/>},
        { path: "/news-publication", element: <NewsAndPublication/>},
        { path: "/gallery", element: <Gallery/>},
        
      ]
    },
  ]);



  export default router;