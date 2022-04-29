import React, { useState } from "react";
import styles from "./Navigation.module.scss";

const NavbarScroll = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleScroll = () =>
    window.scrollY >= 80
      ? setNavbarBackground(true)
      : setNavbarBackground(false);

  window.addEventListener("scroll", handleScroll);

  const [underlineActive, setUnderlineActive] = useState(1);

  const toggleActiveUnderline = (index) => {
    setUnderlineActive(index);
  };

  return (
    <nav className={navbarBackground ? styles.navbarActive : styles.navbar}>
      <section className={styles.navigation}>
        <i className={`${styles.logo} bi-gem`}>
          <span className={styles.authorName}>Patryk Łuszcz</span>
        </i>

        <ul className={styles.nav_links}>
          <li className={styles.link}>
            <a
              className={
                underlineActive === 1
                  ? `${styles.anchor} ${styles.active}`
                  : styles.anchor
              }
              onClick={() => toggleActiveUnderline(1)}
              href="#home"
            >
              Home
            </a>
          </li>
          <li className={styles.link}>
            <a
              className={
                underlineActive === 2
                  ? `${styles.anchor} ${styles.active}`
                  : styles.anchor
              }
              onClick={() => toggleActiveUnderline(2)}
              href="#about_me"
            >
              About me
            </a>
          </li>
          <li className={styles.link}>
            <a
              className={
                underlineActive === 3
                  ? `${styles.anchor} ${styles.active}`
                  : styles.anchor
              }
              onClick={() => toggleActiveUnderline(3)}
              href="#my_projects"
            >
              My projects
            </a>
          </li>
          <li className={styles.link}>
            <a
              className={
                underlineActive === 4
                  ? `${styles.anchor} ${styles.active}`
                  : styles.anchor
              }
              onClick={() => toggleActiveUnderline(4)}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default NavbarScroll;
