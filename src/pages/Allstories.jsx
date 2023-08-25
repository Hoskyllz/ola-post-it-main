import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import dash from "../assets/dash.png";
import { BsArrowRight } from "react-icons/bs";

const Allstories = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  const getStories = async () => {
    setLoading(true);
    const {
      data: { stories },
    } = await axios.get(`${baseURL}/story/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    setStories(stories);
    console.log(stories);
  };
  useEffect(() => {
    getStories();
  }, []);
  return (
    <div>
      <Header t3={"Logout"} />
      <div className="heroback mb-5">
        <div className="container d-flex justify-content-between gap-2  ">
          <div className="you mt-5">
            <h1 className="fw-bold">You’ve got a story, <br /> Post <span className="colo">it</span>.</h1>
            <p className="mt-4 fw-normal">Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur <br />
egestas massa velit aliquam. Molestim bibendum <br />
hnt ipsum orci, platea aliquam id ut. </p>
          </div>
                  <div className="dash">
          <img src={dash} alt="" />
        </div>
        </div>
      </div>
      <div className=" container d-flex allstory">
        {loading
          ? "Loading..."
          : stories.map((s) => {
              const {
                _id,
                image,
                description,
                title,
                createdAt,
                tag,
                createdBy: { username },
              } = s;
              return (
                <div key={_id} className=" container justify-content-between gap-2">
                  <img src={image} alt="" width={"250px"} height={"250px"} />
                  <p className="fw-normal box1">{tag}</p>
                  <p className="fw-bold">{title} </p>
                 <div className="d-flex gap-2">
                  <p className="fw-bold">By:  {username}</p>
                  <p>{new Date(createdAt).toDateString()} </p>
                    </div>
                  <p className="fw-light box2">{description} </p>
                 <Link to={`/single/${_id}`} className="text-decoration-none boxer"> <BsArrowRight/> Read More...</Link>
                </div>
              );
            })}
      </div>
      <div className="back">
        <Footer/>
      </div>
    </div>
  );
};

export default Allstories;
