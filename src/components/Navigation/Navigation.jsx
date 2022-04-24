import React, { useState } from "react";
import styles from "./NavbarScroll.module.scss";

const NavbarScroll = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleScroll = () =>
    window.scrollY >= 80
      ? setNavbarBackground(true)
      : setNavbarBackground(false);

  window.addEventListener("scroll", handleScroll);

  return (
    <nav className={navbarBackground ? styles.navbarActive : styles.navbar}>
      <ul className="navbar-navv">
        <a className="navbar-brand" href="#home">
          <i className="bi bi-gem">
            <span className="authorName">Patryk Łuszcz</span>
          </i>
        </a>
        <li className="nav-item">
          <a className="nav-link active" href="#home">
            Homeeee
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#about_mee"
            onClick={() => console.log(`first`)}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#my_projects">
            My projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarScroll;
