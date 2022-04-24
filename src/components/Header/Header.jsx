import "../styles/Header.scss";
import { useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleScroll = () =>
    window.scrollY >= 80
      ? setNavbarBackground(true)
      : setNavbarBackground(false);

  window.addEventListener("scroll", handleScroll);

  return (
    <header className={styles.header}>
      <div className="hero-shadow"></div>

      <section className="header_container">
        <h1 className="header_title">CREATE TO INSPIRE</h1>
      </section>

      <h2 className="title_links">Check me on:</h2>
      <div className="header_links">
        <div className="github_link">
          <a href="https://github.com/patrykluszcz">
            <i className="bi bi-github"></i>
          </a>
        </div>
        <div className="linkedin_link">
          <a href="https://www.linkedin.com/in/patryk-%C5%82uszcz-1674a9231/">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
