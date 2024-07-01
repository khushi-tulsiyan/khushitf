import tl from "../assets/img/tailwindcss.jpg";
import nextj from "../assets/img/nextjs.png";
import tailwind from "../assets/img/tailwindcss.jpg";
import tp from "../assets/img/typescript.png";
import rel from "../assets/img/redux logo.png";
import nodej from "../assets/img/nodejs.png";
import cl from "../assets/img/cl.png";
import al from "../assets/img/al.png";
import cil from "../assets/img/cil.jpg";
import reactl from "../assets/img/reactl.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
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
                        <h2>Skills</h2>
                        <p> </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={rel} alt="Image" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={nextj} alt="Image" />
                                <h5>NextJS</h5>
                            </div>
                            <div className="item">
                                <img src={tp} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={nodej} alt="Image" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={tl} alt="Image" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={rel} alt="Image" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={al} alt="Image" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={cl} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={cil} alt="Image" />
                                <h5>CI/CD</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}