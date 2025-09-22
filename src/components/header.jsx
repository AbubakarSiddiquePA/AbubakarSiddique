import React from "react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <h1 className="site-title">Abubakar Siddique</h1>
          <p className="site-role">
            Flutter Developer • Learning Web Development • Aspiring Software Engineer
          </p>
        </div>
        <nav className="site-nav" aria-label="Primary navigation">
          <ul className="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
