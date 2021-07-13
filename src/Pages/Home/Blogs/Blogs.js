import React from "react";
import SingleBlog from "./SingleBlog";

const Blogs = () => {
  return (
    <>
      <section class="section blog">
        <div class="section-title">
          <h2>blog</h2>
          <div class="underline"></div>
        </div>
        <div class="section-center blog-center">
          <SingleBlog />
        </div>
      </section>
    </>
  );
};

export default Blogs;
