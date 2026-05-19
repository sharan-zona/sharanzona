import profile from "../assets/sharannn.png"
import "../styles/About.css"


function About() {

const handleResumeClick = () => {
  window.open(`${import.meta.env.BASE_URL}Resume.pdf`, "_blank");
};

  return (
    <section id="about" className="about">

      <div className="about-container">
        <div className="about-image">
          <img src={profile} alt="profile" />
        </div>

        <div className="about-content">
          <h1>Hi, I'm Sharan Zona</h1>
          <h3>Final year student.</h3>
          <h4>Junior Web Developer</h4>
          <p>
            Currently i'm pursuing my Btech degree from St.Xavier's Catholic College of Engineering.
             At the Dept. of Information technology.
          </p>

          <button id="resume-btn" onClick={handleResumeClick}>
            View My Resume
          </button>

        </div>
      </div>

    </section>
  )
}

export default About
