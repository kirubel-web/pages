import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/4.png";
import "./index.scss";
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Profile from "./Profile";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["i", "r", "b", "e", "l"];
  const jobArray = [
    "C",
    "o",
    "m",
    "p",
    "u",
    "t",
    "e",
    "r",
    " ",
    "E",
    "n",
    "g",
    "i",
    "n",
    "e",
    "e",
    "r"
  ]
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  

  return (
<>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="dev" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={20}
          />
        </h1>
        <h2>FullStack Developer / Currently Backend Specialisation</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Profile />
    </div>
    <Loader type="pacman" />
    </>
  );
};

export default Home;
