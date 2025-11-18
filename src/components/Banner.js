import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export const Banner = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);
  const toRotate = [ "FullStack", "Frontend", "Backend" ];
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i] + " " + t.banner.developer;
    let updatedText = isDeleting ? text.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(80);
    } else {
      setDelta(100);
    }

    if (!isDeleting && updatedText === fullText) {
      setDelta(period);
      setIsDeleting(true);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta, language])

  const handleDownloadCV = (e) => {
    e.preventDefault();
    // CV en español: 1m6JvvzD7Y52G_e_Tg9o0ATyQLgZrD8st
    // CV en inglés: 12AWTD-Fa_BAy3Gz8uRsFH6j_JXnENhqq
    const fileId = language === 'es' 
      ? '1m6JvvzD7Y52G_e_Tg9o0ATyQLgZrD8st' 
      : '12AWTD-Fa_BAy3Gz8uRsFH6j_JXnENhqq';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const fileName = language === 'es' ? 'CV_Brahyan.pdf' : 'CV_Brahyan_English.pdf';
    
    // Crear un enlace temporal para forzar la descarga
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <h1>{t.banner.hola}<br/><span className="txt-rotate-container"><span className="txt-rotate"><span className="wrap">{text || '\u00A0'}</span></span></span></h1>
                <p>{t.banner.description}</p>
                <button 
                  onClick={handleDownloadCV}
                  className="download-cv-btn"
                >
                  {t.banner.verCV} <i className="fa-solid fa-download"></i>
                  <span className="overlay"></span>
                </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="animate__animated animate__zoomIn">
              <img src={headerImg} alt="Header Img"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
