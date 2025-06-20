import { NavLink } from "react-router-dom";
import "./NavBar.css"; 

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <h1 className="nav-title">Admin Panel</h1>
      <div className="nav-buttons">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-btn active" : "nav-btn")}
        >
            Flowers
        </NavLink>

        <NavLink
          to="/add-flowers"
          className={({ isActive }) => (isActive ? "nav-btn active" : "nav-btn")}
        >
            Add Flowers
        </NavLink>
      </div>
      <div className="vertical-line"></div>
    </nav>
  );
};

export default NavBar;
