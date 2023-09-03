import "./index.scss";
import {  NavLink } from "react-router-dom";
//import LogoS from "../../assets/images/4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="nav-bar">
     {/* <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="logo" /> 
      </Link> */}
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassName="active" to="/" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassName="active"
          to="/about"
          className="about-link"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassName="active"
          to="/contact"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://linkedin.com/k">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d42" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.telegram.com/kiru_bel8"
          >
            <FontAwesomeIcon icon={faTelegram} color="#4d4d42" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/kirubel-web"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d42" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;


