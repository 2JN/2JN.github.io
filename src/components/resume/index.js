import React, { useEffect, useRef } from "react";

import * as styles from "./resume.module.css";

const Resume = () => {
  const langRef = useRef();
  const skillsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!langRef.current) return;

      if (entry.isIntersecting && entry.intersectionRect.top)
        langRef.current.classList.add(styles.animate);
      else langRef.current.classList.remove(styles.animate);
    });

    if (langRef.current) observer.observe(langRef.current);
  }, [langRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!skillsRef.current) return;

      if (entry.isIntersecting && entry.intersectionRect.top)
        skillsRef.current.classList.add(styles.animate);
      else skillsRef.current.classList.remove(styles.animate);
    });

    if (skillsRef.current) observer.observe(skillsRef.current);
  }, [skillsRef]);

  return (
    <div className={styles.resumeContainer}>
      <section className={styles.leftSide}>
        <div className={styles.profileText}>
          <div className={styles.imgBox}>
            <img src="https://secure.gravatar.com/avatar/140c45d1b4768a444ded020076e81ad5?size=200" />
          </div>
          <h2>
            Jonathan Esquivel <br />
            <span>Web Developer</span>
          </h2>
        </div>

        <div className={styles.contactInfo}>
          <h3 className={styles.title}>Contact Info</h3>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLine="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className={styles.text}>+502 5018 2721</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLine="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className={styles.text}>jesquivelnavas@gmail.com</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLine="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className={styles.text}>www.2jn.github.com</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLine="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
              <span className={styles.text}>www.linkedin.com/in/2jen</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLine="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLine="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className={styles.text}>Gutemala, Quetzaltenango</span>
            </li>
          </ul>
        </div>

        <div className={`${styles.contactInfo} ${styles.education}`}>
          <h3 className={styles.title}>Education</h3>
          <ul>
            <li>
              <h5>2010 - 2013</h5>
              <h4>Master Degree in Computer Science</h4>
              <h4>Mariano Galvez University</h4>
            </li>
          </ul>
        </div>

        <div className={`${styles.contactInfo} ${styles.lang}`}>
          <h3 className={styles.title}>Languages</h3>
          <ul ref={langRef} className={styles.animate}>
            <li>
              <span className={styles.text}>English</span>
              <span className={styles.percent}>
                <div style={{ width: "85%" }}>
                  <div className={styles.bar} />
                </div>
              </span>
            </li>
            <li>
              <span className={styles.text}>Spanish</span>
              <span className={styles.percent}>
                <div style={{ width: "100%" }}>
                  <div className={styles.bar} />
                </div>
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.rightSide}>
        <div className={styles.about}>
          <h2 className={styles.title}>Profile</h2>
          <p>
            Web developer and technology enthusiast, passionate to learn,
            discuss and create solutions for modern days. I am a Full Stack
            Javascript developer, experienced in the creation of web
            applications through TDD.
          </p>
        </div>

        <div className={styles.about}>
          <h2 className={styles.title}>Experience</h2>
          <div className={styles.box}>
            <div className={styles.time}>
              <h5>2021 - Present</h5>
              <h5>Zaelot</h5>
            </div>
            <div className={styles.text}>
              <h4>Fronet Developer</h4>
              <p>
                Specialized on Frontend Development, building eCommerce websites
                and administrative site applications with Vuejs and Angular
              </p>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.time}>
              <h5>2020 - 2021</h5>
              <h5>Freelance</h5>
            </div>
            <div className={styles.text}>
              <h4>Freelance Developer</h4>
              <p>
                Worked as a freelance developer, creating and mainting mobile
                apps for Android and iOS under the Ionic framework and websites
                build on Laravel a PHP framework
              </p>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.time}>
              <h5>2018 - 2020</h5>
              <h5>Ciancoders</h5>
            </div>
            <div className={styles.text}>
              <h4>Software Developer</h4>
              <p>
                Worked as a general software developer, creating web and desktop
                applications using JavaScript related Frameworks as React,
                Electron, Feathersjs and others
              </p>
            </div>
          </div>
        </div>

        <div
          ref={skillsRef}
          className={`${styles.about} ${styles.skills} ${styles.animate}`}
        >
          <h2 className={styles.title}>Professional Skills</h2>
          <div className={styles.box}>
            <h4>JavaScript</h4>
            <div className={styles.percent}>
              <div style={{ width: "90%" }}>
                <div className={styles.bar} />
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <h4>React</h4>
            <div className={styles.percent}>
              <div style={{ width: "85%" }}>
                <div className={styles.bar} />
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <h4>Vue</h4>
            <div className={styles.percent}>
              <div style={{ width: "75%" }}>
                <div className={styles.bar} />
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <h4>Angular</h4>
            <div className={styles.percent}>
              <div style={{ width: "60%" }}>
                <div className={styles.bar} />
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <h4>Nodejs</h4>
            <div className={styles.percent}>
              <div style={{ width: "80%" }}>
                <div className={styles.bar} />
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <h4>Django/Python</h4>
            <div className={styles.percent}>
              <div style={{ width: "70%" }}>
                <div className={styles.bar} />
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <h4>Laravel/PHP</h4>
            <div className={styles.percent}>
              <div style={{ width: "60%" }}>
                <div className={styles.bar} />
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.about} ${styles.interest}`}>
          <h2 className={styles.title}>Interest</h2>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                stroke="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"
                ></path>
              </svg>
              Tinkering
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                stroke="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"
                ></path>
              </svg>
              Gaming
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLine="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Reading
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLine="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
              <span>Movies and Series</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
