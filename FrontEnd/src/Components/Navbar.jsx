import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/createblog">
          <li>Add Blog</li>
        </Link>
        <Link to="/all">
          <li>Edit Blogs</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
