/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

import * as styles from "./skills.module.css";

const Skills = () => {
  useEffect(() => {
    setTimeout(() => {
      if (
        !window.$("#canvas").tagcanvas(
          {
            outlineColour: "#ff00ff",
            outlineThickness: 0.5,
            freezeActive: true,
            shuffleTags: true,
            shape: "sphere",
            noSelect: true,
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05,
            wheelZoom: false,
            textFont: null,
            textColour: null,
            weightMode: "both",
            initial: [0.1, -0.1],
          },
          "tags"
        )
      ) {
        // something went wrong, hide the canvas container
        window.$("#canvasContainer").hide();
      }
    }, 2000);
  }, []);

  return (
    <section>
      <div className="container">
        <h1>My Skills</h1>
        <div className={styles.skillsContainer}>
          <div className={styles.skillsDescription}>
            <p>
              I have experience building responsive websites. I like to create
              UI effects and animations focused on the end user experience.
            </p>

            <p>
              I also have some degree of experience building RESTful and graphQL
              APIs. I like to work on challeging projects and enjoy learning and
              discussing new subjects.
            </p>
          </div>
          <div id="canvasContainer">
            <canvas id="canvas" width="500" height="500">
              <div id="tags">
                <a href="#">ReactJS</a>
                <a href="#">Angular</a>
                <a href="#">Vue</a>
                <a href="#">CSS</a>
                <a href="#">SASS</a>
                <a href="#">HTML</a>
                <a href="#">JavaScript</a>
                <a href="#">TypeScript</a>
                <a href="#">NodeJS</a>
                <a href="#">graphQL</a>
                <a href="#">MongoDB</a>
                <a href="#">SQL</a>
                <a href="#">GIT</a>
                <a href="#">SVG</a>
              </div>
            </canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
