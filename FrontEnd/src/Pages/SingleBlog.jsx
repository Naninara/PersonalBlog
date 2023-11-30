import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleBlog.css";
import Loader from "../Components/Loader";
function SingleBlog() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  //useEffect to call api at loading
  useEffect(() => {
    axios
      .get(`http://localhost:3500/getblog/${id}`)
      .then((response) => setData(response.data))
      .catch((err) => alert("something went wrong"));
  }, [id]);
  return !data ? (
    <Loader></Loader>
  ) : (
    <div className="singleblog">
      <h1>Blog Name : {data.heading}</h1>
      <h4>{data.subheading}</h4>
      <h5>Last Updated On : {data.LastUpdated.substring(0, 10)}</h5>
      <h3>{data.content}</h3>
    </div>
  );
}

export default SingleBlog;
