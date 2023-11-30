import React from "react";

import "./card.css";
import { Link } from "react-router-dom";

//destructoring props
const Card = ({ heading, subheading, content, _id }) => {
  return (
    <div className="card">
      <div className="main">
        <div className="blog-card">
          <div className="blog-content-wrapper">
            <h3>
              <Link to={`/singleblog/${_id}`} className="h3">
                {heading}
              </Link>
            </h3>
            <h5>{subheading}</h5>

            <p className="blog-text">
              {content.length > 300 ? content.substr(0, 300) + "..." : content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
