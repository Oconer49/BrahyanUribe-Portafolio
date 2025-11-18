import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import {
  HashRouter as Router
} from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export const NavBar = () => {

  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // Bloquear scroll cuando el menú está abierto en móvil
  useEffect(() => {
    if (menuOpen && window.innerWidth <= 991) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.classList.add('menu-open');
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.classList.remove('menu-open');
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  return (
    <Router>
      <Navbar 
        expand="md" 
        className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
        onToggle={(expanded) => setMenuOpen(expanded)}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={`${process.env.PUBLIC_URL}/navbarimage.png`} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{t.nav.inicio}</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{t.nav.habilidades}</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{t.nav.referencias}</Nav.Link>
              <Nav.Link href="#contacto" className={activeLink === 'contacto' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contacto')}>{t.nav.contacto}</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/brahyan-uribe-osorio-b782321bb/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Oconer49" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" /></a>
              </div>
              <div className="language-switch-container">
                <label className="language-switch">
                  <input 
                    type="checkbox" 
                    checked={language === 'en'} 
                    onChange={toggleLanguage}
                  />
                  <span className="language-slider">
                    <svg className="translate-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" fill="currentColor"/>
                    </svg>
                  </span>
                </label>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
