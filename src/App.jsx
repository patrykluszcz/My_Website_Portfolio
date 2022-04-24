import "../styles/App.scss";
import Header from "./Header";
import Main from "./layouts/Main";
import SectionProjects from "./layouts/SectionProjects";
import SectionContact from "./layouts/SectionContact";
import Footer from "./components/Footer/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "./layouts/Layout/Layout";

const App = () => (
  <Layout>
    <Header />
    <main id="about_me">{<Main />}</main>
    <section id="my_projects" className="my_projects">
      {<SectionProjects />}
    </section>
    <section id="contact">{<SectionContact />}</section>
    <footer>{<Footer />}</footer>
  </Layout>
);

export default App;
