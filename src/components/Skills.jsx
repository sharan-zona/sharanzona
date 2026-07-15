import Marquee from "./Marquee";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <p className="section-label">Skills</p>

      <Marquee />

      <Marquee reverse />
    </section>
  );
}