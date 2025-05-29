import React from "react";

import Nav from "../nav";
import WaveBorder from "../waveBorder";
import Footer from "../footer";
import * as styles from "./layout.module.css";

const Layout = ({ children }) => (
  <main className="page-container">
    <div className={styles.blog}>
      <Nav />
      <section className="py-16">
        <div className="container mx-auto">{children}</div>
      </section>
    </div>
    <div className="page-footer">
      <WaveBorder borderColor={"top"} />
      <Footer className="bg-(--dark-grey-color)" />
    </div>
  </main>
);

export default Layout;
