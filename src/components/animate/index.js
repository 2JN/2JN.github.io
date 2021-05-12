import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import * as styles from "./animate.module.css";

const Animate = ({ animate = "up", children }) => {
  const wrapperRef = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRect.top)
        animationRef.current.classList.add(styles.animation);
      else animationRef.current.classList.remove(styles.animation);
    });

    if (wrapperRef.current) observer.observe(wrapperRef.current);
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className={`${styles.wrapper} ${styles[animate]}`}>
      <div ref={animationRef}>{children}</div>
    </div>
  );
};

Animate.propTypes = {
  animate: PropTypes.oneOf(["up", "left"]),
  children: PropTypes.element.isRequired,
};

export default Animate;
