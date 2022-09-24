import React from "react";

import * as styles from "./about.module.css";
import Resume from "../resume";
import Animate from "../animate";

const printResume = () => {
  window.print();
};

const About = () => {
  // TODO: wait for page to load to show content

  return (
    <section>
      <div className="container">
        <h1>Hey There! I'm Jose Navas</h1>

        <p>
          I'm Web Developer that focuses on building websites that help to
          connect with business' audiences using engaging visuals and intuitive
          interfaces. You can take a look to whole set of skills on my resume
          down there!
        </p>

        <p className={styles.save}>
          You can also{" "}
          <a href="#" onClick={printResume}>
            save it
          </a>
        </p>

        <div className={styles.resume}>
          <Animate>
            <Resume />
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
