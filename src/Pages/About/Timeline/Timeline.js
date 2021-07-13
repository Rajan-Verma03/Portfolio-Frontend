import React from "react";
import SingleTimeline from "./SingleTimeline";

const Timeline = () => {
  return (
    <>
      <section class="section timeline">
        <div class="section-title">
          <h2>timeline</h2>
          <div class="underline"></div>
        </div>
        <div class="section-center timeline-center">
          <SingleTimeline />
          <SingleTimeline />
          <SingleTimeline />
        </div>
      </section>
    </>
  );
};

export default Timeline;
