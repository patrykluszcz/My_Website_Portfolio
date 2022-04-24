import React, {useState} from 'react'

const NavbarScroll = () => {
    const [navbarBackground, setNavbarBackground] = useState(false)

    const handleScroll = () => (
      window.scrollY >= 80 ? setNavbarBackground(true) : setNavbarBackground(false)
    )

    window.addEventListener("scroll", handleScroll)

  return (
    <nav className={navbarBackground ? "navigation active" : "navigation"}></nav>
  )
}

export default NavbarScroll