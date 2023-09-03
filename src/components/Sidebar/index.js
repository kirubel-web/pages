import "./index.scss";
import {  NavLink } from "react-router-dom";
//import LogoS from "../../assets/images/4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTelegram,
  faSlack,
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
        <ul class="ul-jus">
          <li>
        <NavLink exact="true" activeclassName="active" to="/" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        </li>
        <li>
        <NavLink
          exact="true"
          activeclassName="active"
          to="/about"
          className="about-link"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        </li>
        <li>
        <NavLink
          exact="true"
          activeclassName="active"
          to="/contact"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        </li>
        </ul>
        <ul>
        
        <li>
          <a target="_blank" rel="noreferrer" href="https://linkedin.com" className="Linked-link">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d42" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.telegram.com/kiru_bel8"
            className="telegram-link"
          >
            <FontAwesomeIcon icon={faTelegram} color="#4d4d42" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/kirubel-web"
            className="github-link"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d42" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://join.slack.com/t/kirubelhq/shared_invite/zt-22pojaxsx-asp8WownEnRyfTM9~JXKAQ"
            className="slack-link"
          >
            <FontAwesomeIcon icon={faSlack} color="#4d4d42" />
          </a>
        </li>
        
        </ul>
      </nav>
      
      
      </div>
    
  );
};
export default Sidebar;


