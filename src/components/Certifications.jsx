import { CERTIFICATIONS } from "../data/Data";
import "../styles/Certifications.css";

export default function Certifications() {
  return (
    <section id="certs" className="section">
      <p className="section-label">Certifications</p>

      <div className="certs">
        {CERTIFICATIONS.map((cert, index) => (
          <a
            key={index}
            href={cert.pdf}
            target="_blank"
            rel="noreferrer"
            className="cert-card"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="cert-image"
            />

            <div className="cert-content">
              <h4>{cert.title}</h4>
              <p>{cert.issuer}</p>
              <span>{cert.year}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}