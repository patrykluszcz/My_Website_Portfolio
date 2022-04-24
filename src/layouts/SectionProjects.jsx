import "../styles/SectionProjects.scss"
import MyWebsiteImage from "../images/My_website.png"
import Tilt from "../components/Tilt"

const SectionProjects = () =>{

    const options = {
        speed: 1000,
        max: 25
    };

    return(
        
        <div className="projects_container">
            <h1 className="projects_title">My Projects</h1>

            <div className="projects_hub">

                <Tilt className="project" options={options}>
                    <h1 className="project_name">My Website</h1>
                    <img src={MyWebsiteImage} alt="My website" />
                </Tilt>
               
                <Tilt className="project" options={options}>
                    <h1 className="project_name">Calculator</h1>
                </Tilt>
               
                <Tilt className="project"></Tilt>
                <Tilt className="project"></Tilt>
                <Tilt className="project"></Tilt>
                <Tilt className="project"></Tilt>
                <Tilt className="project"></Tilt>
                <Tilt className="project"></Tilt>

            </div>
            <div className="hero_shadow_projects"></div>
        </div>
    )
}

export default SectionProjects;