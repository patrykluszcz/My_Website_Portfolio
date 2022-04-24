import "../styles/Header.scss";
import React, {useState} from 'react'

const Header = () => {


    const [navbarBackground, setNavbarBackground] = useState(false)

    const handleScroll = () => (
      window.scrollY >= 80 ? setNavbarBackground(true) : setNavbarBackground(false)
    )

        window.addEventListener("scroll", handleScroll)
  

  return(
    <>
    <nav className={navbarBackground ? "navigation active" : "navigation"}>

      <ul className="navbar-nav">
        <a className="navbar-brand" href="#home">
        <i className="bi bi-gem"><span className='authorName'>Patryk Łuszcz</span></i>
        </a>
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about_me">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="#my_projects">
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

        <div className="hero-shadow"></div>

        <section className='header_container'>
          <h1 className='header_title'>CREATE TO INSPIRE</h1>
        </section>



            <h2 className='title_links'>Check me on:</h2>
          <div className="header_links">
            <div className="github_link"><a href="https://github.com/patrykluszcz"><i className="bi bi-github"></i></a></div>
            <div className="linkedin_link"><a href="https://www.linkedin.com/in/patryk-%C5%82uszcz-1674a9231/"><i className="bi bi-linkedin"></i></a></div>
          </div>

    </>  
           
  )
}

export default Header;