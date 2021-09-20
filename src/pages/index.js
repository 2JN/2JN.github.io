import React from "react";

import Cover from "../components/cover";
import Nav from "../components/nav";
import Description from "../components/description";
import Projects from "../components/projects";
import WaveBorder from "../components/waveBorder";
import ContactMe from "../components/contactMe";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <main>
      <Cover />
      <Nav />
      <Description />
      <WaveBorder borderColor={"top"} />
      <Projects />
      <WaveBorder />
      <ContactMe />
      <WaveBorder borderColor={"top"} />
      <Footer background="secondary" />
    </main>
  );
};

export default IndexPage;
