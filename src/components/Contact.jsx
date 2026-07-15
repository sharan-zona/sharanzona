import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

import {
  NAME,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from "../data/Data";

import "../styles/Contact.css";

export default function Contact() {
  return (
    <footer id="contact" className="section contact">
      <p className="section-label">Contact</p>

      <h3>Let's Connect</h3>

      <p className="contact-description">
        I'm currently looking for internship and full-time opportunities in
        software development. <br />
        <b>Thank you </b>for visiting my portfolio.
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <FiMail />
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>

        <div className="contact-item">
          <FiLinkedin />
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="contact-item">
          <FiGithub />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="contact-item">
          <FiMapPin />
          <span>Tamil Nadu, India</span>
        </div>
      </div>
      <p className="footer-note">
        © {new Date().getFullYear()} {NAME}. All Rights Reserved.
      </p>
    </footer>
  );
}