import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateBlog.css";
import { TextField } from "@mui/material";
function CreateBlog() {
  const navigate = useNavigate();
  const [blogname, setBlogname] = useState("");

  //function to create a blog
  function createBlogFunction() {
    if (blogname === "") {
      alert("Blog Name must be filled");
      return;
    }
    axios
      .post("http://localhost:3500/addblog", { blogname })
      .then((response) => {
        navigate(`/updateblog/${response.data._id}`);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="create-blog">
      <h1>Enter Blog Name To Get Started</h1>
      <TextField
        label="Enter Blog Name"
        variant="outlined"
        size="small"
        type="text"
        onChange={(e) => {
          setBlogname(e.target.value);
        }}
      ></TextField>
      <button className="btn" onClick={createBlogFunction}>
        Add A Blog +
      </button>
    </div>
  );
}

export default CreateBlog;
