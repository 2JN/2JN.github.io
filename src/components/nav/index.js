import React, { useEffect, useRef, useState } from "react";

import MenuIcon from "../icons/menu";
import CrossIcon from "../icons/cross";
import * as styles from "./nav.module.css";

const elementInViewport = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const Nav = () => {
  const navRef = useRef();
  const menuRef = useRef();
  const closeRef = useRef();
  const previousScrollPosition = useRef(0);
  const [isOpen, setOpen] = useState(false);

  const isScrollingDown = () => {
    let scrolledPosition = window.scrollY;
    let isScrollDown;

    if (scrolledPosition > previousScrollPosition) isScrollDown = true;
    else isScrollDown = false;

    previousScrollPosition.current = scrolledPosition;
    return isScrollDown;
  };

  useEffect(() => {
    if (isOpen) {
      menuRef.current.classList.add(styles.rotateOut);
      menuRef.current.classList.remove(styles.rotateIn);
      closeRef.current.classList.add(styles.rotateIn);
      closeRef.current.classList.remove(styles.rotateOut);
    } else {
      menuRef.current.classList.add(styles.rotateIn);
      menuRef.current.classList.remove(styles.rotateOut);
      closeRef.current.classList.add(styles.rotateOut);
      closeRef.current.classList.remove(styles.rotateIn);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(previousScrollPosition);
      if (elementInViewport(navRef.current)) {
        if (isScrollingDown()) {
          navRef.current.classList.add("scroll-down");
          navRef.current.classList.remove("scroll-up");
        } else {
          navRef.current.classList.add("scroll-up");
          navRef.current.classList.remove("scroll-down");
        }
      } else if (
        navRef.current.classList.contains("visible") &&
        !elementInViewport(navRef.current)
      ) {
        navRef.current.classList.remove("scroll-up");
        navRef.current.classList.remove("scroll-down");
      }
    });
  }, [navRef]);

  const onMenuClick = () => {
    setOpen((open) => !open);
  };

  return (
    <nav ref={navRef} className={styles.nav}>
      <div className="container">
        <a href="/" className={styles.logo}>
          2J
        </a>
        <div className={styles.mobileNav}>
          <button className={styles.iconButton} onClick={onMenuClick}>
            <div ref={menuRef}>
              <MenuIcon />
            </div>
            <div ref={closeRef}>
              <CrossIcon />
            </div>
          </button>
          <ul className={styles.mdList}>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
