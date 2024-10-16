import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./sections/Home";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import ContactUs from "./sections/contactUs/ContactUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
