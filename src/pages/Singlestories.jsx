import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Singlestories = () => {
  const { storyId } = useParams();
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [username, setusername] = useState("")
  const [createdBy, setCreatedBy] = useState("")
  const [createdAt, setCreatedAt] = useState("")
  

  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  const getStory = async () => {
    const {
      data: { story },
    } = await axios(`${baseURL}/story/${storyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    console.log(story);
    setTag(story.tag);
    setDescription(story.description);
    setImage(story.image);
    setTitle(story.title);
    setusername(story.username)
    setCreatedBy(story.createdBy)
    setCreatedAt(story.createdAt)
  };
  useEffect(() => {
    getStory();
  }, [storyId]);
  return (
    <div>
      <Header t3={"Logout"} />
      <div className="container">
      <p className="fw-normal box1"> {tag}</p>
        <h1>{title} </h1>
        <div className="d-flex gap-2">
                  <p className="fw-bold">By:{username}</p>
                  <p>{new Date(createdAt).toDateString()} </p>
                    </div>
      <img src={image} alt="" className="simg"/>
      
        <p>{description} </p>
        </div>
      <div className="back">
        <Footer/>
      </div>
    </div>
  );
};

export default Singlestories;
