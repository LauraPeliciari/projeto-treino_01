import React from 'react';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faApplePay, faAmazonPay, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {

  return (
    <footer>
      <section className="main-footer main-grid">
        <div className="footer-info">
          <div className="links">
            <div className="column">
              <h4>help</h4>
              <ul className="column-content">
                <li><a href="contact">contact</a></li>
                <li><a href="faqs">FAQs</a></li>
                <li><a href="returns">returns</a></li>
              </ul>
            </div>
            <div className="column">
              <h4>about us</h4>
              <ul className="column-content">
                <li><a href="our-story">our story</a></li>
                <li><a href="stores">stores</a></li>
                <li><a href="careers">careers</a></li>
              </ul>
            </div>
            <div className="column">
              <h4>follow us</h4>
              <ul className="column-content">
                <li><a href="facebook">facebook</a></li>
                <li><a href="twitter">twitter</a></li>
                <li><a href="instagram">instagram</a></li>
                <li><a href="pinterest">pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="newsletter">
            <h3>be the first to know</h3>
            <form className="newsletter-form">
              {/* <label>Email adress</label> */}
              <input type="text" placeholder="Email adress" className="newsletter-input" />
              <button className="newsletter-btn"><FontAwesomeIcon icon={ faArrowRight } /></button>
            </form>
          </div>
        </div>
      </section>
      <section className="footer-bottom main-grid">
          <div className="footer-copyright">
            <ul className="right-icons">
              <li><FontAwesomeIcon icon={ faApplePay } /></li>
              <li><FontAwesomeIcon icon={ faAmazonPay } /></li>
              <li><FontAwesomeIcon icon={ faCcVisa } /></li>
            </ul>
            <ul className="left-links">
              <li><a href="legals">legals</a></li>
              <li><a href="sac">SAC</a></li>
            </ul>
          </div>
      </section>
    </footer>
  )
}

export default Footer;
