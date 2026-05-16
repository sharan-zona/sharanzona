import "../styles/Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">

      <h1>Skills:</h1>   {/* 👈 moved OUTSIDE */}

      <div className="skills-container">
        
        <div className="skills-card">
          <h2>Technical Skills:</h2>
          <ul>
            <li>HTML | CSS</li>
            <li>Javascript</li>
            <li>ReactJs</li>
            <li>Python</li>
            <li>C</li>
          </ul>
        </div>

        <div className="skills-card">
          <h2>Soft Skills:</h2>
          <ul>
            <li>Leadership</li>
            <li>Self Learner</li>
            <li>Communication</li>
            <li>Practical thinking</li>
            <li>Time Management</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
