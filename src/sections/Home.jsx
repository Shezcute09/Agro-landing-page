import About from "./about/About";
import ContactUs from "./contactUs/ContactUs";
import NavbarBgImg from "./navbar-bg-img/NavbarBgImg";
import Navbar from "./navbar/Navbar";
import Partners from "./partners/Partners";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <NavbarBgImg />
      <About />
      <Services />
      <Testimonials />
      <ContactUs />
      <Partners />
    </div>
  );
};

export default Home;
