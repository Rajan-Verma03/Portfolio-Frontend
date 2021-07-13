import React from "react";
import { FaRegWindowClose } from "react-icons/fa";

const Sidebar = ({ closeSidebar }) => {
  return (
    <>
      <aside class="sidebar">
        <button class="sidebar-btn" onClick={closeSidebar}>
          <FaRegWindowClose />
        </button>
        <ul class="sidebar-links">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/projects">projects</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
