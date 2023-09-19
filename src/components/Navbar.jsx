import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logobg.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
            <p>Asher blog</p>
          </Link>
        </div>
        <div className="links">
          <Link
            className={`link ${location.search === "?cat=art" ? "active" : ""}`}
            to="/?cat=art"
          >
            <h6>ART</h6>
          </Link>
          <Link
            className={`link ${
              location.search === "?cat=technology" ? "active" : ""
            }`}
            to="/?cat=technology"
          >
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link
            className={`link ${
              location.search === "?cat=cinema" ? "active" : ""
            }`}
            to="/?cat=cinema"
          >
            <h6>CINEMA</h6>
          </Link>
          <Link
            className={`link ${
              location.search === "?cat=design" ? "active" : ""
            }`}
            to="/?cat=design"
          >
            <h6>DESIGN</h6>
          </Link>
          <Link
            className={`link ${
              location.search === "?cat=food" ? "active" : ""
            }`}
            to="/?cat=food"
          >
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
