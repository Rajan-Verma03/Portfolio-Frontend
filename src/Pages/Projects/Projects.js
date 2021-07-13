import React, { useEffect, useState } from "react";
import SingleProject from "./singleProject/singleProject";
import { Link } from "react-router-dom";
import sanityClient from "../../client";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]
        {slug
        ,about
        ,name
        ,link
        ,codeLink
        ,'imgUrl': titleImg.asset->url
      }`
      )
      .then((res) => {
        setProjects(res);
      })
      .catch(console.error);
  }, []);
  return (
    <div class="projects">
      <div class="projects-container">
        <div class="projects-title">
          <h1>my projects</h1>
          <div class="underline"></div>
        </div>
        <section class="projects-section">
          {projects.length !== 0 ? (
            projects.map((project, index) => (
              // <Link
              //   to={"/projects/" + project.slug.current}
              //   key={project.slug.current}
              // >
              <a href={project.link}>
                <SingleProject project={project} key={index} />
              </a>
              // </Link>
            ))
          ) : (
            <h3 class="projects-section-noProject">
              No Projects available to show <span role="img">😕</span>
            </h3>
          )}
        </section>
      </div>
    </div>
  );
};

export default Projects;
