import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Mystories = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  const getStories = async () => {
    setLoading(true);
    const {
      data: { stories },
    } = await axios(`${baseURL}/story`, {
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

  const handleDelete = async (id) => {
    const { data } = await axios.delete(`${baseURL}/story/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data.success) {
      window.location.reload();
    }
  };
  return (
    <div>
      <Header t3={"Logout"}/>
      <div className="container mt-5">
      <div className="d-flex justify-content-between">
        <h1 className="harm">My stories</h1>
        <button className="side ">
          <Link to="/create" className="text-decoration-none text-white">Write Story</Link>
          </button>
          
        </div>
        <hr />

      <div className="mt-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {stories.map((s) => {
              const {
                _id,

                description,
                title,
              } = s;
              return (
                <div key={_id} className=" d-flex justify-content-between gap-3">
                  <div className="side1">
                  <h2 className="fw-bolder sans">{title} </h2>

                    <p className="fw-light sans2">{description} </p>
                  </div>
                  <div className="d-flex gap-3 sid">
                  <Link to={`/edit/${_id}`}>
                    <button className="side2">Edit Story</button>
                  </Link>
                    <button onClick={() => handleDelete(_id)} className="side3">Delete</button>
                    </div>
                </div>
              );
            })}
          </div>
        )}
        </div>
      </div>
      <div className="back">
        <Footer/>
      </div>
    </div>
  );
};

export default Mystories;
