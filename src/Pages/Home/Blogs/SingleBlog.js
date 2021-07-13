import React from "react";
import BlogImg from "../../../assets/images/project-3.jpeg";
import profileImg from "../../../assets/images/hero-img-small.jpeg";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <>
      <div class="card">
        <div class="card-side card-front">
          <img src={BlogImg} alt="" />
          <div class="card-info">
            <h4>article title</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nisi
              ut a est eum tempora dolorum temporibus voluptatibus! Natus,
              provident.
            </p>
            <div class="card-footer">
              <img src={profileImg} alt="author" />
              <p>7 min read</p>
            </div>
          </div>
        </div>
        <div class="card-side card-back">
          <Link to="/blog" class="btn">
            read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
