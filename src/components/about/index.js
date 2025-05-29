import React from "react";

import Resume from "../resume";
import Animate from "../animate";

const printResume = () => {
  window.print();
};

const About = () => {
  // TODO: wait for page to load to show content

  return (
    <section className="py-12 print:py-0">
      <div className="container mx-auto space-y-6 [&>p]:text-xl print:mx-0 print:p-0! print:max-w-none">
        <h1 className="text-3xl">Hey There! I'm Jose Navas</h1>

        <p>
          I'm Web Developer that focuses on building websites that help to
          connect with business' audiences using engaging visuals and intuitive
          interfaces. You can take a look to whole set of skills on my resume
          down there!
        </p>

        <p className="text-right">
          You can also{" "}
          <button onClick={printResume} className="text-(--secondary-color)">
            save it
          </button>
        </p>

        <Animate>
          <Resume />
        </Animate>
      </div>
    </section>
  );
};

export default About;
