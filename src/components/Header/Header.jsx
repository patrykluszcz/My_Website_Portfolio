import HeaderCSS from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header id="home" className={HeaderCSS.header}>
      <Navigation />
      <div className={HeaderCSS.hero_shadow}></div>

      <section className={HeaderCSS.container}>
        <h1 className={HeaderCSS.title}>CREATE TO INSPIRE</h1>
      </section>

      <h2 className={HeaderCSS.title_links}>Check me on:</h2>
      <div className={HeaderCSS.links}>
        <div className={HeaderCSS.github_link}>
          <a href="https://github.com/patrykluszcz">
            <i className={`${HeaderCSS.icon_github} bi bi-github`}></i>
          </a>
        </div>
        <div className={HeaderCSS.linkedin_link}>
          <a href="https://www.linkedin.com/in/patryk-%C5%82uszcz-1674a9231/">
            <i className={`${HeaderCSS.icon_linkedin} bi bi-linkedin`}></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
