import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import Card from "../Components/Card";
import axios from "axios";

function HomePage() {
  //variable to all details of posted blogs
  const [blogdetails, setBlogdetails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3500/getallblog")
      .then((response) => setBlogdetails(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Hero />
      <h1
        style={{
          fontFamily: "Montserrat",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Latest Blogs
      </h1>
      {blogdetails.map((ele) => {
        //passing data into card component using props
        if (ele.isPosted) return <Card {...ele} key={ele._id} />;
        return [];
      })}
    </div>
  );
}

export default HomePage;
