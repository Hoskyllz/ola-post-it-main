import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Edit = () => {
  const { storyId } = useParams();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");
  const { baseURL } = useGlobalContext();
  const redirect = useNavigate();
  const getStory = async () => {
    const {
      data: { story },
    } = await axios(`${baseURL}/all/${storyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    setTag(story.tag);
    setDescription(story.description);
    setTitle(story.title);
  };
  useEffect(() => {
    getStory();
  }, [storyId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { data } = await axios.patch(
      `${baseURL}/story/${storyId}`,
      { tag, title, description },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (data.success) {
      redirect("/mystories");
    }
  };
  return (
    <div>
            <div>
        <Header t3= {"Logout"} />
      </div>
      <form onSubmit={handleUpdate} className="container mt-5">
        <div>
          
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title:"
            className="create fw-bold"
          />
        </div>
        <div>
          {/* <label htmlFor="tag">Tag</label> */}
          <select
            name=""
            id="tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="create2"
          >
            <option value="">Tag; Select Tags</option>
            <option value="nature">Nature</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="sport">Sport</option>
            <option value="technology">Technology</option>
            <option value="others">Other Tag</option>
          </select>
        </div>
        <div>
          <label htmlFor="description"></label>
          <textarea
            name=""
            id="description"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Edit Story"
            className="create4 fw-bold"
          ></textarea>
        </div>
        <div className="text-center">
          <button className="pubs">Update Story</button>
          </div>
      </form>
      <div className="back">
        <Footer/>
      </div>
    </div>
  );
};

export default Edit;
