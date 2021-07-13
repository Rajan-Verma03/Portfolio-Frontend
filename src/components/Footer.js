import React from "react";

const footer = () => {
  return (
    <>
      <footer class="footer">
        <ul class="social-icons">
          <li>
            <a href="https://www.twitter.com" class="social-icon">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" class="social-icon">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" class="social-icon">
              <i class="fab fa-squarespace"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <p>
          2021 &copy; <span id="date"></span> Rajan Verma, all rights reseved
        </p>
        {/* <small>
          Design Inspiration:
          <a href="https://www.johnsmilga.com/projects">@johnSmilga</a>
        </small> */}
      </footer>
    </>
  );
};

export default footer;
