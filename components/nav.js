import React from 'react';
import { faReact, faJsSquare, faApple, faFontAwesome, faGithub, faGoogle, faSass, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Nav = () => (
  <nav className="top-grid main-grid">
    <ul className="left-info">
      <li><a href="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
      <li><a href="github"><FontAwesomeIcon icon={faGithub} /></a></li>
    </ul>
    <ul className="right-info">
      <li><a href="apple "><FontAwesomeIcon icon={faApple} /></a></li>
      <li><a href="fontAwesome"><FontAwesomeIcon icon={faFontAwesome} /></a></li>
      <li><a href="google"><FontAwesomeIcon icon={faGoogle} /></a></li>
      <li><a href="sass"><FontAwesomeIcon icon={faSass} /></a></li>
      <li><a href="react"><FontAwesomeIcon icon={faReact} /></a></li>
      <li><a href="javaScript"><FontAwesomeIcon icon={faJsSquare} /></a></li>
    </ul>  
  </nav>
)

export default Nav;
