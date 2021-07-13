import React, { useState } from "react";
import { AiOutlineAlignRight } from "react-icons/ai";
import logo from "../assets/images/logo.svg";

const Navbar = ({ openSidebar }) => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar--container">
          <button type="button" onClick={openSidebar} className="navbar--btn">
            <AiOutlineAlignRight />
          </button>
          <ul className="navbar--links">
            <li className="navbar--links_l1 navbar--links_li">
              <a href="/">Home</a>
            </li>
            <li className="navbar--links_l2 navbar--links_li">
              <a href="/projects">projects</a>
            </li>
            <li className="navbar--links_l3 navbar--links_li">
              <a href="/about">about</a>
            </li>
            <li className="navbar--links_l3 navbar--links_li">
              <a href="/contact">contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
