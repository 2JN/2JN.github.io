import React from "react";

import Project from "./project";
import Animate from "../animate";
import connectBbc from "../../images/projects/connectbbc.png";

const Projects = () => {
  return (
    <section className="bg-(--dark-grey-color) pt-10 pb-18">
      <div className="container">
        <Animate>
          <h2 className="text-3xl mb-8">Featured Projects</h2>

          <p className="mb-6 text-xl">
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
          <p className="mb-6 text-xl">
            I worked on this project when it was on an early stage, the website
            is able to make appointments for rides, it includes a functional
            map.
          </p>
          <ul className="flex gap-8">
            {["Nextjs", "Bootstrap", "Nodejs"].map((tech) => (
              <li className="py-1 px-3 border-1 border-(--primary-color) rounded-md">
                {tech}
              </li>
            ))}
          </ul>
        </Project>
      </div>
    </section>
  );
};

export default Projects;
