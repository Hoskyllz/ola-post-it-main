import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = ({ t1, t2, t3 }) => {
  return (
    <div  className="d-flex justify-content-between">
      <div className="logo">
        <h1>
          <Link to="/"><img src={logo} alt="" /></Link>
        </h1>
      </div>
      
      <div className="d-flex justify-content-between gap-2">
        <Link to="/allstories">Stories</Link>
        <Link>Contact</Link>
        <Link to="/login">{t1}</Link>
        {t2 && (
          <Link to="/register">
            <button className="btn btn-primary">{t2}</button>
          </Link>
        )}

        <Link to= "/" >{t3}</Link>
      </div>
    </div>
  );
};

export default Navbar;
