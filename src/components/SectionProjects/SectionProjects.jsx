import SectionProjectsCSS from "./SectionProjects.module.scss";
import MyWebsiteImage from "../../images/My_website.png";
import Tilt from "../MovingCards/Tilt";

const options = {
  speed: 1000,
  max: 25,
};

const SectionProjects = () => {
  return (
    <section id="my_projects" className={SectionProjectsCSS.projects}>
      <h1 className={SectionProjectsCSS.title}>My Projects</h1>
      <div className={SectionProjectsCSS.hub}>
        <Tilt className={SectionProjectsCSS.project} options={options}>
          <h1 className={SectionProjectsCSS.project_name}>My Website</h1>
          <img src={MyWebsiteImage} alt="My website" />
        </Tilt>

        <Tilt className={SectionProjectsCSS.project} options={options}>
          <h1 className={SectionProjectsCSS.project_name}>Calculator</h1>
        </Tilt>

        <Tilt className={SectionProjectsCSS.project}></Tilt>
        <Tilt className={SectionProjectsCSS.project}></Tilt>
        <Tilt className={SectionProjectsCSS.project}></Tilt>
        <Tilt className={SectionProjectsCSS.project}></Tilt>
        <Tilt className={SectionProjectsCSS.project}></Tilt>
        <Tilt className={SectionProjectsCSS.project}></Tilt>
      </div>
      <div className={SectionProjectsCSS.hero_shadow}></div>
    </section>
  );
};

export default SectionProjects;
