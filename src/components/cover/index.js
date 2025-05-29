import React from "react";

import * as styles from "./cover.module.css";

const Cover = () => (
  <header
    className={`${styles.cover} min-h-screen relative flex items-center justify-center`}
  >
    <div className="container">
      <h1 className="text-xl text-(--secondary-color)">Jose Navas</h1>
      <p className="text-4xl leading-18">Full Stack JavaScript Developer,</p>
      <p className="text-4xl leading-18">Passionate Technology Enthusiast</p>
      <p className="text-xl text-(--secondary-color)">
        Builder of Responsive and Accessible Websites
      </p>
    </div>
  </header>
);

export default Cover;
