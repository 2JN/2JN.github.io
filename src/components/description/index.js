import React, { useEffect, useRef } from "react";

import * as styles from "./description.module.css";

const Presentation = () => {
  const presentationRef = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting)
        animationRef.current.classList.add(styles.animation);
      else animationRef.current.classList.remove(styles.animation);
    });

    if (presentationRef.current) observer.observe(presentationRef.current);
  }, [presentationRef]);

  return (
    <section
      ref={presentationRef}
      className={`container ${styles.presentation}`}
    >
      <div ref={animationRef}>
        <h2>Hi, I'm Jose Navas</h2>

        <p>
          I’m a Web Developer from Guatemala. I work remotely as freelance and I
          can help you to reach your audience and make your business grow.
        </p>

        <p>
          I've build websites since 2018, I focus on responsive design,
          animations and accessibility, combined with digital marketing.
        </p>

        <div className={styles.btnContainer}>
          <a href="/" className="btn btn-round">
            MORE ABOUT ME
          </a>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
