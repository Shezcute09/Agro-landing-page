import { NavLink } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle(!toggle);
  }

  return (
    <>
      <div className="nav__bar space__horizontal">
        <img src="public/assets/Logo.svg" alt="Logo" loading="lazy" />

        <ul className="space__horizontal">
          <NavLink className="nav__link" to="/">
            <li className="bigger_text li_st">Home</li>
          </NavLink>
          <NavLink className="nav__link" to="/about">
            <li className="li_st">About Us</li>
          </NavLink>
          <NavLink className="nav__link" to="/services">
            <li className="li_st">Services</li>
          </NavLink>
          <NavLink className="nav__link" to="/contact-us">
            <li className="li_st">Contact Us</li>
          </NavLink>
        </ul>
        <NavLink className="nav__link" to="/">
          <button className="btn">Get Started</button>
        </NavLink>
        <button className="hamburger" onClick={toggleMenu}>
          <img
            src="public/assets/hamburger.svg"
            alt="Hamburger Menu"
            loading="lazy"
          />
        </button>
      </div>

      {toggle && <Sidebar />}
    </>
  );
};

export default Navbar;
