import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Asher blog</p>
      <span>
        Developed by{" "}
        <Link target="_blank" to="https://github.com/Ashermuzic">
          Asher.
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
