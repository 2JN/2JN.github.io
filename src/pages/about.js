import React from "react";

import Nav from "../components/nav";
import About from "../components/about";
import WaveBorder from "../components/waveBorder";
import Footer from "../components/footer";

const AboutPage = () => {
  return (
    <main className="page-container [&_.container]:px-4 print:[&_nav,_&_h1,_&_p,&_.page-footer]:hidden">
      <Nav />
      <About />

      <div className="page-footer">
        <WaveBorder borderColor={"top"} />
        <Footer className="bg-(--dark-grey-color)" />
      </div>
    </main>
  );
};

export default AboutPage;
