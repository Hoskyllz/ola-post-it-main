import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import insta from "../assets/insta.png"

const Footer = () => {
  return (
    <div>
      <div className="container d-flex justify-content-between gap-3 text-white">
        <div className="first">
          <h5>
            About Post<span className="colo">it</span>.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in
            rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet.
            que maeae tortoere necsem commodo ac.
          </p>
              </div>
              
                  <div className=" second d-flex gap-4">
                      
                      <div>
                          <h5>Qiuck Menu</h5>
                          <a href="" className="text-decoration-none text-white"><p>Home</p></a>
                          <a href=""className="text-decoration-none text-white"><p>Stories</p></a>
                          <a href=""className="text-decoration-none text-white"><p>Trending Stories</p></a>
                          <a href=""className="text-decoration-none text-white"><p>Popular Stories</p></a>
                      </div>
                      <div>
                          <h5>---</h5>
                          <a href=""className="text-decoration-none text-white"><p>Sign Up</p></a>
                          <a href=""className="text-decoration-none text-white"><p>Log In</p></a>
                          <a href=""className="text-decoration-none text-white"><p>Contact Us</p></a>
                      </div>
                     
                  </div>
                  
              <div className="third">
                  <div><h5>Subscribe to our newsletter</h5></div>
                  <div><input type="text" placeholder="Email Address" className="ip2" />  <Link
            to="/register"
            className="text-decoration-none text-dark fw-bold tag me-2"
          >
            <button className="btn22"> {"Subscribe"} </button>
          </Link></div>
             </div>
          </div>
      <hr className="hh" />
      <div className="container socials text-white  text-end">
        <p>Terms and Policy</p> 
        {/* <div className="justify-content-between gap-5">
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
          <img src={insta} alt="" />
          </div> */}

      </div>
          
    </div>
  );
};

export default Footer;
