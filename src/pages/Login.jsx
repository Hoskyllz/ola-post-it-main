import React from "react";
import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { baseURL } = useGlobalContext();
  const redirect = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data } = await axios.post(`${baseURL}/login`, {
      email,
      password,
    });
    if (data.success) {
      // store token inside localstorage
      localStorage.setItem("token", data.token);
      // redirect welcome
      redirect("/welcome");
    } else {
    }
  };
  return (
    <div className="backlogin d-flex justify-content-center align-content-center">
      <div className="container ">
        <div className="container  log  ">

       

      
          <form onSubmit={handleLogin}className="bg-white mx-auto text-center fm " >
                      <div>
            <h3 className="fw-bold">Welcome Back</h3>
          </div>
        <div>
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            id="email"
            value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="loginip"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label><br />
          <input
            type="password"
            id="password"
            value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="loginip"
          />
        </div>
            <button type="submit" className="btnlog">{loading ? `Logging in .. ` : "Continue"}</button>
                       <div>
            <p className="fw-bold">No account? <Link to= "/register" className="text-decoration-none"><span className="colo "> Sign Up</span></Link> </p>
          </div>
          </form>

          

        </div>
        </div>
    </div>
  );
};

export default Login;
