import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SectionProjects from "./components/SectionProjects/SectionProjects";
import SectionContact from "./components/SectionContact/SectionContact";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "./layouts/Layout";

const App = () => (
  <Layout>
    <Header />
    <Main />
    <SectionProjects />
    <SectionContact />
  </Layout>
);

export default App;
