import React from "react";
import { Link } from "react-router-dom";
import ProjectImg from "../../../assets/images/project-1.jpeg";

const SingleProject = ({ styleClass }) => {
  return (
    <>
      <Link to="/project" class={styleClass}>
        <article class="project">
          <img src={ProjectImg} alt="single project" class="project-img" />
          <div class="project-info">
            <h4>project title</h4>
            <p>client name</p>
          </div>
        </article>
      </Link>
    </>
  );
};

export default SingleProject;
