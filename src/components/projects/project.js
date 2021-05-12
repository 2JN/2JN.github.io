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
    <article className={styles.project}>
      <Animate animate={animate}>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <div className={styles.imgContainer}>
            <img src={imageSrc} alt={imageAlt} className="img-cover" />
          </div>
        </a>
      </Animate>
      <Animate>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <h3>{name}</h3>
        </a>
        {children}
      </Animate>
    </article>
  );
};

export default Project;
