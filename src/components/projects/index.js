import React, { useEffect, useRef } from "react";

import Project from "./project";
import Animate from "../animate";
import * as styles from "./projects.module.css";
import connectBbc from "../../images/projects/connectbbc.png";

const Projects = () => {
  return (
    <section className={`${styles.projects}`}>
      <div className="container">
        <Animate>
          <h2>Featured Projects</h2>

          <p>
            Some of them made for the Web, others made as for mobile apps, all
            of them developed to reach the client.
          </p>
        </Animate>

        <Project
          name="Connect"
          animate="left"
          imageSrc={connectBbc}
          imageAlt="connect bbc"
          projectLink={"https://www.connectbbc.com"}
        >
          <p>
            I worked on this project when it was on an early stage, the website
            is able to make appointments for rides, it includes a functional
            map.
          </p>
          <ul>
            <li>Nextjs</li>
            <li>Bootstrap</li>
            <li>Nodejs</li>
          </ul>
        </Project>
      </div>
    </section>
  );
};

export default Projects;
