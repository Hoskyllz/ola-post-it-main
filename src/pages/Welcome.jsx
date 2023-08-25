import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import axios from "axios";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import dash from "../assets/dash.png";

const Welcome = () => {
  const { baseURL } = useGlobalContext();
  const [user, setUser] = useState("");
  const token = localStorage.getItem("token");
  const getUser = async () => {
    const { data } = await axios(`${baseURL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(data.username);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <div>
        <Header t3={"Logout"} />
      </div>
      <div className="container d-flex justify-content-between gap-2">
        <div className="wu">
          <div className="wel">
            <h1 className="mb-4">Welcome {user}, </h1>
            <p>
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur <br />{" "}
              egestas massa velit aliquam. Molestim bibendum <br /> hnt ipsum
              orci, platea aliquam id ut.{" "}
            </p>
          </div>
          <div className="mg d-flex  gap-4 mt-4">
          <Link to="/mystories">
            <button className="ms1">MY STORIES</button>
          </Link>
          <Link to="/allstories">
            <button className="ms2">GO TO FEED</button>
            </Link>
            </div>
        </div>
        <div className="dash">
          <img src={dash} alt="" />
        </div>
      </div>
      <div className="back">
        <Footer />
      </div>
    </div>
  );
};

export default Welcome;
