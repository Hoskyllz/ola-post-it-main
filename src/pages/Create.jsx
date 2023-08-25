import React, { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { BsChatRightText } from "react-icons/bs";
import Footer from "../components/Footer";
// tag, description, title, image
//nature, lifestyle, sport, technology, others
const Create = () => {
  const { baseURL } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const token = localStorage.getItem("token");
  const redirect = useNavigate()


  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("tag", tag);
    formdata.append("description", description);
    formdata.append("image", image);
    const {data} = await axios.post(`${baseURL}/story`, formdata, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },{title,tag,description,image} );
    //console.log(res);
    if (data.success) {
      redirect("/allstories")
    } else {
      
    }
  };

  return (
    <div>
      <div>
        <Header t3= {"Logout"} />
      </div>

      <div className="container mt-5">
        <h1>Create Story</h1>
      
      <form encType="multipart/form-data" onSubmit={handleCreate} >
        <div>
          <label htmlFor="title" ><BsChatRightText/></label> <br />
            <input
              placeholder= "Title"
            type="text"
            id="title"
            value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="create"
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
            <option value="">Select Tags</option>
            <option value="nature">Nature</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="sport">Sport</option>
            <option value="technology">Technology</option>
            <option value="others">Other Tag</option>
          </select>
        </div>
        <div className="create3">
          <label htmlFor="image" className="create3">Upload Image</label>
          <input
            accept="image/*"
            type="file"
            placeholder="selce image"
            id="image"
            name="image"
              onChange={(e) => setImage(e.target.files[0])}
             
          />
        </div>
        <div>
          <label htmlFor="description"></label>
            <textarea
              placeholder="Write Your Story......."
            name=""
            id="description"
            cols="30"
            rows="10"
            value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="create4"
          ></textarea>
          </div>
          <div className="text-center ">

            <button type="submit" className="pubs">{loading ? "creating..." : "Publish Story"}</button>
            </div>
        </form>
      </div>
      <div className="back">
        <Footer/>
      </div>
    </div>
  );
};

export default Create;
