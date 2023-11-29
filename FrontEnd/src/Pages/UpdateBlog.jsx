import { TextField, Typography } from "@mui/material";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./UpdateBlog.css";

function UpdateBlog() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState({});
  const [saving, setSaving] = useState("saved....");
  useEffect(() => {
    axios
      .get(`http://localhost:3500/getblog/${id}`)
      .then((response) => setBlogData(response.data))
      .catch((err) => console.log(err));
  }, [id]);
  function handleChange(e) {
    setBlogData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function postData() {
    axios
      .patch("http://localhost:3500/post/65675e901f84922ea2bf676a")
      .then(() => {
        alert("posted to public sucessfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    setSaving("saving...");
    const getData = setTimeout(() => {
      axios
        .patch(`http://localhost:3500/updatedata/${id}`, { ...blogData })
        .then(() => setSaving("saved...."))
        .catch((err) => {
          setSaving("Oops! unable to save");
        });
    }, 1000);
    return () => clearTimeout(getData);
  }, [blogData, id]);

  return (
    <div className="container">
      <div className="content">
        <Typography
          variant="span"
          color="#000000"
          fontSize={"48px"}
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Blog Name:{blogData?.blogname}
        </Typography>
        <Typography
          variant="span"
          color={saving === "saved...." ? "green" : "red"}
          fontSize={"20px"}
          fontWeight="700"
          fontFamily="Montserrat"
        >
          AutoSave Status : {saving}
        </Typography>
        <Typography
          variant="span"
          color="rgba(26, 18, 11, 0.90)"
          fontSize={"32px"}
          fontWeight="700"
          fontFamily="Montserrat"
          name="heading"
        >
          Blog Heading
        </Typography>

        <TextField
          className="input-text"
          label="Blog Heading"
          variant="outlined"
          size="small"
          name="heading"
          type="text"
          value={blogData.heading || ""}
          onChange={handleChange}
        ></TextField>
        <Typography
          variant="span"
          color="rgba(26, 18, 11, 0.90)"
          fontSize={"32px"}
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Sub Heading
        </Typography>

        <TextField
          className="input-text"
          label="Enter Subheading"
          variant="outlined"
          size="small"
          type="text"
          name="subheading"
          value={blogData.subheading || ""}
          onChange={handleChange}
        ></TextField>
        <Typography
          variant="span"
          color="rgba(26, 18, 11, 0.90)"
          fontSize={"32px"}
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Content
        </Typography>

        <TextField
          className="input-text"
          label="Enter your content"
          multiline
          rows={4}
          variant="outlined"
          size="small"
          type="text"
          name="content"
          value={blogData.content || ""}
          onChange={handleChange}
        ></TextField>

        <div className="button-div">
          <button className="btn" type="submit" onClick={postData}>
            Post Blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateBlog;
