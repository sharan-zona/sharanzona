import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h1>Projects:</h1>
      {/* Projects Section */}
      <div className="projects-container">
        <div className="project-card">
          <h2>Simple Calculator</h2>
          <p className="type">Python</p>
          <p className="tools"></p>
          <p className="desc">
          A Simple Calculator that is build using Python.
          </p>
          <div className="buttons">
            <a href="https://github.com/sharan-zona/calc">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h2>Portfolio</h2>
          <p className="type">Frontend</p>
          <p className="tools">React, CSS</p>
          <p className="desc">
            Personal portfolio website showcasing projects and skills.
          </p>
          <div className="buttons">
            <a href="https://sharan-zona.github.io/sharanzona/#">Live</a>
            <a href="https://github.com/sharan-zona/sharanzona">GitHub</a>
          </div>
        </div>
      </div>
 <h1 id="intern">Internship:</h1>
      {/* Internship Section */}
      <div className="internship-container">
        <div className="project-card">
          <h2>Web Developer</h2>
          <p className="type">
            <a href="https://shadobooks.com/">@SHADOBOOKS PVT. LTD</a>
          </p>
          <p className="tools">Located at Marthandam</p>
          <p className="desc">
            During my internship at Shadobooks Pvt Ltd, I worked on web application
            development with a focus on building responsive and user-friendly interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
