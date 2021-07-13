import React from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaGithubSquare } from "react-icons/fa";

const singleProject = ({ project }) => {
  return (
    <>
      <article class="project">
        <img src={project.imgUrl} alt="project" />
        <div class="project-container">
          <div class="project-details">
            <h4>{project.name}</h4>
            <p>{project.about}</p>
          </div>
          {/* <div class="project-footer">
            <span>
              <a href={project.codeLink} rel="noreferrer" target="_blank">
                <FaGithubSquare />
              </a>
            </span>
            <Link
              to={"/projects/" + project.slug.current}
              key={project.slug.current}
            >
              View More..
            </Link>
          </div> */}
        </div>
      </article>
    </>
  );
};

export default singleProject;
