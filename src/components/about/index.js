import React from "react";

import * as styles from "./about.module.css";

const About = () => {
  return (
    <section>
      <div className="container">
        <h1>Hey There! I'm Jose Navas</h1>

        <p>
          I'm Web Developer that focuses on building websites that help to
          connect with business' audiences with engaging visuals and intuitive
          interfaces. You can take a look to whole set of skills on my resume
          down there!
        </p>

        <div className={styles.btnContainer}>
          <a
            className="btn btn-round btn-primary"
            href="/CV - Jonathan Esquivel.pdf"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
