import React from "react";

import Cover from "../components/cover";
import Description from "../components/description";
import Projects from "../components/projects";
import WaveBorder from "../components/waveBorder";
import ContactMe from "../components/contactMe";

const IndexPage = () => {
  return (
    <main>
      <Cover />
      <Description />
      <WaveBorder borderColor={"top"} />
      <Projects />
      <WaveBorder />
      <ContactMe />
      <WaveBorder borderColor={"top"} />
    </main>
  );
};

export default IndexPage;
