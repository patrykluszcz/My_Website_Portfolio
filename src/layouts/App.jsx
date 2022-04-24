import "../styles/App.scss"
import Header from "./Header";
import Main from "./Main"
import SectionProjects from "../layouts/SectionProjects"
import SectionContact from "../layouts/SectionContact";
import Footer from "../layouts/Footer"
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <div className="App">
      <header id="home" className="home">{<Header/>}</header>
      <main id="about_me">{<Main/>}</main>
      <section id="my_projects" className="my_projects">{<SectionProjects/>}</section>
      <section id="contact">{<SectionContact/>}</section>
      <footer>{<Footer/>}</footer>
    </div>
  );
};

export default App;
