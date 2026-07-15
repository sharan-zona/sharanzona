import { FiArrowUpRight } from "react-icons/fi";
import { PROJECTS } from "../data/Data";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <section id="work" className="section">
      <p className="section-label">Experience</p>

      {/* Internship */}
      <div className="internship-card">
        <div className="project-top">
          <span className="project-n">Internship</span>
        </div>

        <h3>Web Developer Intern</h3>

        <h4 className="company-name">
          Shadobooks Pvt. Ltd.
        </h4>

        <p>
          Completed a Web Development Internship where I gained practical
          experience in building responsive websites and modern user
          interfaces. Worked with HTML, CSS and JavaScript while
          collaborating on real-world development tasks and improving my
          problem-solving and teamwork skills.
        </p>

        <div className="project-stack">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>GitHub</span>
        </div>
      </div>

      <p className="section-label" style={{ marginTop: "60px" }}>
        Projects
      </p>

      <div className="projects">
        {PROJECTS.map((project) => (
          <a
            key={project.n}
            href={project.link}
            className="project-card"
            target={project.link !== "#" ? "_blank" : "_self"}
            rel="noreferrer"
          >
            <div className="project-top">
              <span className="project-n">{project.n}</span>
              <FiArrowUpRight className="project-arrow" />
            </div>

            <h3>{project.name}</h3>

            <p>{project.desc}</p>

            <div className="project-stack">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}