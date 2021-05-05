import React from "react";

import * as styles from "./waveBorder.module.css";

const WaveBorder = () => (
  <div className={styles.waveBorder}>
    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
      <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
      <path
        class="neon-path"
        d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98"
      ></path>
    </svg>
  </div>
);

export default WaveBorder;
