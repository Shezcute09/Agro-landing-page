import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="space__vertical">
        <ul className="space__vertical">
          <NavLink className="nav__link" to="/">
            <li className="bigger_textSide">Home</li>
          </NavLink>
          <NavLink className="nav__link" to="/about">
            <li className="list__sidebar">About Us</li>
          </NavLink>
          <NavLink className="nav__link" to="/services">
            <li className="list__sidebar">Services</li>
          </NavLink>
          <NavLink className="nav__link" to="/contact-us">
            <li className="list__sidebar">Contact Us</li>
          </NavLink>
        </ul>
        <NavLink to="/get-started">
          <button className="btn__sidebar">Get Started</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
