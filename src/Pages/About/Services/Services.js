import React from "react";
import SingleService from "./SingleService";
import { FiCode } from "react-icons/fi";
import { DiAndroid } from "react-icons/di";
import { CgIfDesign } from "react-icons/cg";

const Services = () => {
  return (
    <>
      <section class="services">
        <div class="services-title">
          <h2>services</h2>
          <div class="underline"></div>
        </div>
        <div class="services-cards">
          <SingleService Icon={<FiCode />} title={"Web Devlopment"} />
          {/*description={}*/}
          <SingleService Icon={<DiAndroid />} title={"App Development"} />
          <SingleService Icon={<CgIfDesign />} title={"UI/UX Designer"} />
        </div>
      </section>
    </>
  );
};

export default Services;
