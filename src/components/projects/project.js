import React from "react";

import Animate from "../animate";
import * as styles from "./projects.module.css";

const Project = ({
  animate,
  name,
  children,
  imageSrc,
  imageAlt,
  projectLink,
}) => {
  return (
    <article className="grid grid-cols-2 gap-8">
      <Animate animate={animate}>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <div className={styles.imgContainer}>
            <img src={imageSrc} alt={imageAlt} className="img-cover" />
          </div>
        </a>
      </Animate>

      <Animate>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-semibold mb-4">{name}</h3>
        </a>
        {children}
      </Animate>
    </article>
  );
};

export default Project;
