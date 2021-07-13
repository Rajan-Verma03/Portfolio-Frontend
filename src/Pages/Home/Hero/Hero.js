import React from "react";
import SocialIcons from "./SocialIcons";
import {
  FaGithubSquare,
  FaFacebook,
  FaLinkedinIn,
  FaInstagramSquare,
} from "react-icons/fa";
import heroImg from "../../../assets/images/hero-img.jpeg";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const social = [
  {
    name: "Facebook",
    link: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    name: "Linked In",
    link: "https://www.twitter.com",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Github",
    link: "https://www.twitter.com",
    icon: <FaGithubSquare />,
  },
  {
    name: "Instagram",
    link: "https://www.twitter.com",
    icon: <FaInstagramSquare />,
  },
];

const Hero = () => {
  return (
    <>
      <header class="hero">
        <div class="hero-container">
          <article class="hero-info">
            <div class="underline hero-underline"></div>
            <h1>Rajan Verma</h1>
            <h4>Passionate web developer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              quae, eum maiores est enim earum fugiat aspernatur. Fuga qui iste
              amet reiciendis possimus rerum omnis recusandae molestias
            </p>
            <Link to="/contact" class="btn hero-btn">
              reach me out
            </Link>
            <ul class="social-icons hero-icons">
              {social.map((platform) => {
                return (
                  <Link
                    to={platform.link}
                    data-tip={platform.name}
                    class="social-icon"
                  >
                    <ReactTooltip
                      place="bottom"
                      type="dark"
                      className="tool-tip"
                    />
                    <SocialIcons icon={platform.icon} />
                  </Link>
                );
              })}
            </ul>
          </article>
        </div>
      </header>
    </>
  );
};

export default Hero;
