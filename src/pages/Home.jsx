import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import lifestyle from "../assets/lifestyle.png"
import nature from "../assets/nature.png"
import tech from "../assets/tech.png"

const Home = () => {
  const obj = {
    success: true,
    stories: [
      {
        _id: "64db5dcbfac7fc7d1f0f309f",
        title: "is Food really important?",
        description:
          "Reaserch has shown food alway goes with water and if you eat and you drink water your throat go choke and i pity your papa i don talk my own",
        tag: "others",
        image:
          "https://res.cloudinary.com/dxlxp1u8h/image/upload/v1692097995/postitimage/tmp-1-1692097993491_oabord.jpg",
        createdBy: {
          _id: "64da0918ced9683f605e2e3b",
          username: "testing post",
          email: "posting@google.com",
          password:
            "$2a$10$HdL1qHDI07tR/ljcqzlgzOGe3m6sJ3h3Dx94qeAxXvkqyTfdtBVo6",
          createdAt: "2023-08-14T10:59:36.093Z",
          updatedAt: "2023-08-14T10:59:36.093Z",
          __v: 0,
        },
        createdAt: "2023-08-15T11:13:05.520Z",
        __v: 0,
      },
    ],
  };

  return (
    <div>
      <Header t1={"Sign In"} t2={"Get started"} />
      <div className="banner">
        <div className="container px-3 curious">
          <h1>Stay Curious.</h1>
          <p>
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur {" "}
            egestas massa velit aliquam. Molestim bibendum  hnt ipsum
            orci, platea aliquam id ut.{" "}
          </p>
          <Link
            to="/register"
            className="text-decoration-none text-dark fw-bold tag me-2"
          >
            <button className="btn2"> {"Get started"} </button>
          </Link>
        </div>
      </div>
      <div className="container d-flex flex-wrap lnt justify-content-between gap-2">
        <div className="lifestyle d-flex justify-content-between gap-2">
          <div className="one">
            <img src={lifestyle} alt="" />
          </div>
          <div className="two">
            <button className="bg-warning text-white">lifestyle</button>
            <p>The 20 Biggest Fashion Companies <br /> In Nigeria 2022</p>
          </div>
        </div>
        <div className="nature d-flex justify-content-between gap-2">
          <div className="one">
            <img src={nature} alt="" />
          </div>
          <div className="two">
            <button className="bg-success text-white">nature</button>
            <p>The 20 Biggest Agro <br /> Companies In Nigeria 2022</p>
          </div>
        </div>
        <div className="tech d-flex justify-content-between gap-2">
          <div className="one">
            <img src={tech} alt="" />
          </div>
          <div className="two">
            <button className="bg-info text-white ">technology</button>
            <p>The 20 Biggest Fintech <br /> Companies In Nigeria 2022</p>
          </div>
        </div>
      </div>
      <div className="container tp">
        <h3>Try Post<span className="colo">it</span>. </h3>
        <h5>Do you want to write or discover stories from writers on any topic?</h5>
        <input type="text" placeholder="Enter Email Address"  className="ip"/> 
                  <Link
            to="/register"
            className="text-decoration-none text-dark fw-bold tag me-2"
          >
            <button className="btn23"> {"Get started"} </button>
          </Link>
      </div>
      <div  className="back">
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
