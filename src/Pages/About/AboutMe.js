import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <>
      <section class="about">
        <div class="about-container">
          <div class="about-title">
            <h2> about me </h2> <div class="underline"> </div>
          </div>
          <div class="about-me">
            <ul>
              <li>
                <span> Website: </span>
                <Link to="/">Link</Link>
              </li>
              <li>
                <span> City: </span> Sirsa
              </li>
              <li>
                <span> Degree: </span> Bachelors in Computer Apllications
              </li>
              <li>
                <span> Country: </span> India
              </li>
              <li>
                <span> Current Status: </span> Intern At Zimong Software Pvt.
                Ltd.
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero quae,
              eum maiores est enim earum fugiat aspernatur.Fuga qui iste amet
              reiciendis possimus rerum omnis recusandae molestias error
              consequuntur, doloribus inventore reprehenderit officiis.Dolore
              aut, repellendus eius fugiat numquam cumque.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
