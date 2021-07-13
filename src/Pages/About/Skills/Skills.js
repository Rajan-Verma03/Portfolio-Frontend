import React from "react";
import SingleSkill from "./SingleSkill";

const Skills = () => {
  return (
    <>
      <section class="skills">
        <div class="skills-container">
          <div class="skills-title">
            <h2>skills</h2>
            <div class="underline"></div>
          </div>
          <div class="skills-wrapper">
            <article>
              <h3>front end</h3>
              <SingleSkill />
              <SingleSkill />
            </article>
            <article>
              <h3>back end</h3>
              <SingleSkill />
              <SingleSkill />
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
