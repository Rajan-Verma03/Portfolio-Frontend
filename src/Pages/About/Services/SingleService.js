import React from "react";

const SingleService = ({ Icon, title }) => {
  return (
    <>
      <article class="service">
        {Icon}
        <h4>{title}</h4>
        <div class="underline"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
          obcaecati vero.
        </p>
        <ul>
          <li>Projects Count : 3</li>
        </ul>
      </article>
    </>
  );
};

export default SingleService;
