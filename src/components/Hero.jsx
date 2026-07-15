import { useState, useEffect } from "react";
import TypingName from "./Nametype";
import profile from "../assets/sharan.jpg";
import { NAME, ROLES } from "../data/Data";
import "../styles/Hero.css";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 8400);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="hero">
      <div className="hero-text">
        <h6 className="eyebrow">Hey, I'm</h6>

        <TypingName />

        <p className="hero-role">{ROLES[roleIndex]}</p>

        <p className="hero-sub">
          I'm an Information Technology student with a strong interest in
          full-stack web development and Python. I enjoy building responsive
          web applications using HTML, CSS, JavaScript, React, Node.js, and
          Express. I'm always eager to learn, improve my skills, and contribute
          to building reliable software.
        </p>

        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>

          <a className="btn btn-ghost" href="#work">
            See My Work
          </a>
        </div>
      </div>

      <div className="hero-photo-wrap">
        <img
          className="hero-photo"
          src={profile}
          alt={NAME}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling.style.display = "flex";
          }}
        />

        <div className="hero-photo-fallback">{NAME[0]}</div>
      </div>
    </header>
  );
}