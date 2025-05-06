import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "/logo.svg";

const Navbar = () => {
  return (
    <nav className="primary-navigation">
      <NavLink to="/" className="logo">
        <img src={logo} alt="Bouder inc." />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/getting-started">Getting Started</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;