import React from "react";
import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  const { baseURL } = useGlobalContext();
  const redirect = useNavigate();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(email, username, password);
    const { data } = await axios.post(`${baseURL}/register`, {
      email,
      username,
      password,
    });
    console.log(data);
    if (data.success) {
      //take you to login
      redirect("/login");
    } else {
      console.log(data);
    }
  };
  return (
    <div className="backlogin justify-content-center align-content-center" >
      <div className="container">
        <div className="container  log  ">


          <form onSubmit={handleRegister} className="bg-white mx-auto text-center fm ">
                   <div>
          <h3>Join Post<span className="colo">it</span>. </h3>
          <p className="fw-bold">Enter your email address to create an account on Postit.</p>
        </div>
        <div>
          <label htmlFor="username">Username</label> <br />
          <input
            type="text"
            id="username"
            value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="loginip"
          />
        </div>
        <div>
          <label htmlFor="email">Your Email Address</label> <br />
          <input
            type="email"
            id="email"
            value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="loginip"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            id="password"
            value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="loginip"
          />
        </div>
            <button type="submit" className="btnlog">Continue</button>
                        <div>
            <p className="fw-bold">Already have an account? <Link to= "/login" className="text-decoration-none"><span className="colo"> Sign In</span></Link> </p>
          </div>
      </form>
    
          </div>
        </div>
    </div>
  );
};

export default Register;
