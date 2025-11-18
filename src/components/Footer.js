import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer" id="contacto">
      <Container>
        <Row>
          <Col size={12} className="text-center">
            <h2 className="footer-title">{t.footer.contacto}</h2>
            <div className="footer-content">
              <h3 className="footer-subtitle">{t.footer.datosPersonales}</h3>
              <div className="footer-info">
                <p>{t.footer.telefono} <a href="tel:+573168766361">+57 3168766361</a></p>
                <p>{t.footer.email} <a href="mailto:brahyanuribe13@gmail.com">brahyanuribe13@gmail.com</a></p>
              </div>
              <div className="social-icon footer-social">
                <a href="https://www.linkedin.com/in/brahyan-uribe-osorio-b782321bb/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://github.com/Oconer49" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" /></a>
              </div>
            </div>
            <button className="scroll-to-top-btn" onClick={scrollToTop} aria-label="Ir al inicio">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 14L12 9L17 14H7Z" fill="currentColor"/>
              </svg>
            </button>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
