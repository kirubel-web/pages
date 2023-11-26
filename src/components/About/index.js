import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import {
    faPython,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from "react-loaders";

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <>

            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                            idx={15}
                        />
                    </h1>
                    <p>I am a passionate computer engineer with a Good background in web
          development. I have always been fascinated by technology and its
          ability to transform the way we live and work.</p>
                    <p>Apart from web development, I also have a solid foundation in computer
          engineering principles. I have a deep understanding of algorithms,
          data structures, and software engineering practices, which allows me
          to develop efficient and scalable web applications.</p>
                    <p>I am always eager to learn and stay updated with the latest
          technologies and trends in web development.In addition to my technical skills, I am a good team player. I believe in
          effective communication, collaboration, and delivering high-quality
          solutions that meet the client's requirements.</p>
                </div>
                <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faPython} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
            </div>

            <Loader type="ball-scale-multiple" />

    </>
  );
};

export default About;
