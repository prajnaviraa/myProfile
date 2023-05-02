import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutMePage";
import PortofolioPage from "../pages/PortofolioPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/portofolio",
        element: <PortofolioPage />,
      },
    ],
  },
]);

export default router;
