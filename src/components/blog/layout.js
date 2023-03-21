import React from "react";

import Nav from "../nav";
import WaveBorder from "../waveBorder";
import Footer from "../footer";
import * as styles from "./layout.module.css";

const Layout = ({ children }) => (
  <main className="page-container">
    <div className={styles.blog}>
      <Nav />
      <section>
        <div className="container">{children}</div>
      </section>
    </div>
    <div className="page-footer">
      <WaveBorder borderColor={"top"} />
      <Footer background="secondary" />
    </div>
  </main>
);

export default Layout;
