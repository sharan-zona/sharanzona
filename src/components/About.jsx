import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <p className="section-label">About</p>

      <div className="about-intro">
        <h2>Who Am I?</h2>

        <p>
          I'm <b>Sharan Zona</b>. Currently pursuing a B.Tech in
          Information Technology(Final-Year) at 
          St.Xavier's Catholic College of Engineering,
          with a strong interest in 
          Full-Stack web development. 
          I enjoy building user-friendly web applications 
          using HTML, CSS, JavaScript, and React.
          I'm eager to learn, improve my skills,
          and contribute to a team while growing as a 
          Software engineer.
        </p>
      </div>

      <h2 className="education-title">Education</h2>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h3>B.Tech - Information Technology</h3>
            <h4>St. Xavier's Catholic College of Engineering</h4>
            <span>2023 - Present</span>
            <p>CGPA : 7.8</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h3>Higher Secondary (HSC)</h3>
            <h4>Little Flower Girl's Higher Secondary School</h4>
            <span>2021 - 2023</span>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h3>SSLC</h3>
            <h4>Hebron Matriculation Higher Secondary School</h4>
            <span>2020 - 2021</span>
          </div>
        </div>
      </div>
    </section>
  );
}