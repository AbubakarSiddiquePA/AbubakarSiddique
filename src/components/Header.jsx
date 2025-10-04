import React, { useState, useEffect } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle dark mode
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  // Close menu only on mobile
  const handleLinkClick = () => {
    if (window.innerWidth < 800) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          {/* <h1 className="site-title">Abubakar Siddique</h1> */}
          <h1 className="site-title">Abubakar Siddique</h1>

          <p className="site-role">
            Flutter Developer • Web Learner • Aspiring Software Engineer
          </p>
        </div>

        {/* Theme toggle */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Hamburger button (mobile) */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Nav links */}
        <nav
          className={`site-nav ${menuOpen ? "open" : ""}`}
          aria-label="Primary navigation"
        >
          <ul className="nav-list">
            <li>
              <a href="#about" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={handleLinkClick}>
                Experience
              </a>
            </li>
            <li>
              <a href="#education" onClick={handleLinkClick}>
                Education
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleLinkClick}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
