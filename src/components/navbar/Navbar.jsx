import "./navbar.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container-logo">
          <img src={logo} alt="booktracker logo" />
        </div>
        <div className="navbar__container-navlinks">
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/add-book"}>Add Book</NavLink>
            </li>
            <li>
              <NavLink to={"all-books"}>All Books</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
