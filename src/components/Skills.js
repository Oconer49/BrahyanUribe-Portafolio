import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>{t.skills.title}</h2>
                        <p>{t.skills.description}</p>
                        <Carousel 
                          responsive={responsive} 
                          infinite={true} 
                          autoPlay={true}
                          autoPlaySpeed={2000}
                          transitionDuration={500}
                          showDots={false}
                          arrows={false}
                          pauseOnHover={false}
                          swipeable={false}
                          draggable={false}
                          removeArrowOnDeviceType={["tablet", "mobile"]}
                          className="owl-carousel owl-theme skill-slider"
                        >
                            <div className="item">
                                <img src={`${process.env.PUBLIC_URL}/mysqlLogo.png`} alt="MySQL" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={`${process.env.PUBLIC_URL}/yiiLogo.png`} alt="Yii" />
                                <h5>Yii Framework</h5>
                            </div>
                            <div className="item">
                                <img src={`${process.env.PUBLIC_URL}/ReactLogo.png`} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={`${process.env.PUBLIC_URL}/djangoLogo.png`} alt="Django" />
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={`${process.env.PUBLIC_URL}/PythonLogo.png`} alt="Python" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={`${process.env.PUBLIC_URL}/MongoDBLogo.png`} alt="MongoDB" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={`${process.env.PUBLIC_URL}/SQLiteLogo.png`} alt="SQLite" />
                                <h5>SQLite</h5>
                            </div>
                            <div className="item">
                                <img src={`${process.env.PUBLIC_URL}/flaskLogo.png`} alt="Flask" />
                                <h5>Flask</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
