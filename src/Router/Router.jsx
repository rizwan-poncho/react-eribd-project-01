import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage";
import Layout from "../Layout";
import ErrorPage from "../Pages/ErrorPage";
import AboutUs from "../Pages/AboutUs";
import Membership from "../Pages/Membership";
import NewsAndPublication from "../Pages/NewsAndPublication";
import Gallery from "../Pages/Gallery";
import Secretariat from "../Pages/Secretariat";
import PresedentMessage from "../Pages/PresedentMessage";
import AmbassadorBd from "../Pages/AmbassadorBd";
import AmbassadorPh from "../Pages/AmbassadorPh";
import BoardOfDirector from "../Pages/BoardOfDirector";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "*", element: <ErrorPage /> },
        { path: "/about-us", element: <AboutUs/>},
        {path: "/message-01", element: <PresedentMessage/>},
        {path: "/message-02", element: <AmbassadorBd/>},
        {path: "/message-03", element: <AmbassadorPh/>},
        { path: "/membership", element: <Membership/>},
        { path: "/news-publication", element: <NewsAndPublication/>},
        { path: "/gallery", element: <Gallery/>},
        { path: "/secretariat", element: <Secretariat/>},
        { path: "/boardofdirector", element: <BoardOfDirector/>},
        
      ]
    },
  ]);



  export default router;