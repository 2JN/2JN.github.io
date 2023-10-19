import React, { useEffect, useRef, useState } from "react";
import { Link } from "gatsby";
import clsx from "clsx";

import CrossIcon from "../icons/cross";
import MenuIcon from "../icons/menu";
import MoonIcon from "../icons/moon";
import SunIcon from "../icons/sun";
import { actions, useThemeContext } from "../../context/themeContext";
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
  const { state, dispatch } = useThemeContext();

  const isScrollingDown = () => {
    const scrolledPosition = window.scrollY;
    const isScrollDown = scrolledPosition > previousScrollPosition.current;

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
      if (!navRef.current) return;

      if (elementInViewport(navRef.current)) {
        if (isScrollingDown()) {
          navRef.current.classList.add(styles.scrollDown);
          navRef.current.classList.remove(styles.scrollUp);

          setOpen(false);
        } else {
          navRef.current.classList.add(styles.scrollUp);
          navRef.current.classList.remove(styles.scrollDown);
        }
      } else {
        navRef.current.classList.remove(styles.scrollUp);
        navRef.current.classList.remove(styles.scrollDown);
      }
    });
  }, [navRef]);

  const onMenuClick = () => {
    setOpen((open) => !open);
  };

  const onThemeBtnClick = () => {
    dispatch({ type: actions.DARK_MODE, payload: !state.darkMode });
  };

  return (
    <nav ref={navRef} className={styles.nav}>
      <div className="container">
        <a href="/" className={styles.logo}>
          2J
        </a>

        <button className={styles.themeButton} onClick={onThemeBtnClick}>
          {state.darkMode ? <SunIcon /> : <MoonIcon />}
        </button>

        <ul className={styles.menuList}>
          <li>
            <Link to="/about" activeClassName={styles.activeLink}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" activeClassName={styles.activeLink}>
              Skills
            </Link>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" aria-disabled="true">
              Projects
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" aria-disabled="true">
              Contact
            </a>
          </li>
        </ul>

        <div className={styles.mobileMenu}>
          <button onClick={onMenuClick}>
            <div ref={menuRef}>
              <MenuIcon />
            </div>
            <div ref={closeRef}>
              <CrossIcon />
            </div>
          </button>
        </div>
        <ul
          className={clsx(styles.mobileList, {
            [styles.fadeIn]: isOpen,
            [styles.fadeOut]: !isOpen,
          })}
        >
          <li>
            <Link to="/about" activeClassName={styles.activeLink}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" activeClassName={styles.activeLink}>
              Skills
            </Link>
          </li>
          <li>
            <a href="#" aria-disabled="true">
              Projects
            </a>
          </li>
          <li>
            <a href="#" aria-disabled="true">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
