import React from "react";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <>
      <section class="projects">
        <div class="projects-title">
          <h2>latest works</h2>
          <div class="underline"></div>
          <p class="projects-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis
            magnam, earum assumenda obcaecati cum quaerat facere ratione
            molestiae dignissimos aliquid blanditiis architecto voluptates
            delectus voluptate animi nulla! Autem explicabo perspiciatis officia
            ea.
          </p>
        </div>
        <div class="projects-center">
          <SingleProject styleClass="projects-1" />
          <SingleProject styleClass="projects-2" />
          <SingleProject styleClass="projects-3" />
          <SingleProject styleClass="projects-4" />
        </div>
      </section>
    </>
  );
};

export default Projects;
