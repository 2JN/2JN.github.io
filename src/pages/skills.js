import React from "react";

import Nav from "../components/nav";
import Skills from "../components/skills";
import WaveBorder from "../components/waveBorder";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <main className="page-container [&_.container]:px-4">
      <Nav />
      <Skills />
      <div className="page-footer">
        <WaveBorder borderColor={"top"} />
        <Footer className="bg-(--dark-grey-color)" />
      </div>
    </main>
  );
};

export default IndexPage;
