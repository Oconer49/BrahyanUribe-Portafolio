import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import mysqlLogo from "../assets/img/mysqlLogo.png";
import yiiLogo from "../assets/img/yiiLogo.png";
import reactLogo from "../assets/img/ReactLogo.png";
import djangoLogo from "../assets/img/djangoLogo.png";
import pythonLogo from "../assets/img/PythonLogo.png";
import mongoLogo from "../assets/img/MongoDBLogo.png";
import sqliteLogo from "../assets/img/SQLiteLogo.png";
import flaskLogo from "../assets/img/flaskLogo.png";

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
                                <img src={mysqlLogo} alt="MySQL" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={yiiLogo} alt="Yii" />
                                <h5>Yii Framework</h5>
                            </div>
                            <div className="item">
                                <img src={reactLogo} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={djangoLogo} alt="Django" />
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={pythonLogo} alt="Python" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={mongoLogo} alt="MongoDB" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={sqliteLogo} alt="SQLite" />
                                <h5>SQLite</h5>
                            </div>
                            <div className="item">
                                <img src={flaskLogo} alt="Flask" />
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
