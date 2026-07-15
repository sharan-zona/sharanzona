import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <span className="nav-mark">Welcome!</span>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#certs">Certifications</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}