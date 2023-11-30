import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EditBlogs = () => {
  const [blogdetails, setBlogdetails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3500/getallblog")
      .then((response) => setBlogdetails(response.data))
      .catch((err) => console.log(err));
  }, []);

  function deleteBlogFunction(id) {
    axios
      .delete(`http://localhost:3500/delete/${id}`)
      .then(() => {
        alert("deleted sucessfully");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <table border={""}>
        <tbody>
          <tr>
            <td>S.No</td>
            <td>Blog Name</td>
            <td>Is Posted</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          {blogdetails.map((ele, index) => {
            return (
              <tr key={ele._id}>
                <td>{index + 1}</td>
                <td>{ele.blogname}</td>
                <td>{ele.isPosted ? "Posted" : "Not Posted"}</td>
                <td>
                  <Link to={`/updateblog/${ele._id}`}>
                    <button className="update-btn">edit</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="update-btn"
                    onClick={() => {
                      deleteBlogFunction(ele._id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EditBlogs;
