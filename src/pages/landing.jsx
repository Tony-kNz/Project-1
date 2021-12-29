import React from "react";

// sections
import {
  Carousel,
  CoreSection,
  DoYouHaveAProject,
  OurHistory,
  Projects,
  CEO,
} from "./landingSections";

const Landing = () => {
  return (
    <>
      {/* <!-- content  --> */}
      <Carousel />
      <CoreSection />
      <DoYouHaveAProject />
      <OurHistory />
      <CEO />
      <Projects />
    </>
  );
};

export default Landing;
