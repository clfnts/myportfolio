import './App.css'
import { useState } from 'react'

function App() {
  // Smooth scroll handler
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => setMenuOpen((open) => !open);
  const handleNavClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <div className="portfolio-container">
      <header className="site-header">
        <span className="site-title">Your Portfolio</span>
        <nav className="site-nav">
          <button onClick={() => scrollToSection('home-section')}>Home</button>
          <button onClick={() => scrollToSection('about-section')}>About</button>
          <button onClick={() => scrollToSection('projects-section')}>Projects</button>
        </nav>
        <button className="hamburger" onClick={handleMenuClick} aria-label="Open menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        {menuOpen && (
          <div className="mobile-menu">
            <button onClick={() => handleNavClick('home-section')}>Home</button>
            <button onClick={() => handleNavClick('about-section')}>About</button>
            <button onClick={() => handleNavClick('projects-section')}>Projects</button>
          </div>
        )}
      </header>
      <section className="home-section" id="home-section">
        <div className="home-content">
          <div className="home-text">
            <h1 className="portfolio-title">Your Name</h1>
            <p className="portfolio-description">A short description about yourself goes here. Add your passions, profession, or a fun fact!</p>
          </div>
          <div className="profile-pic-placeholder">
            <img src="profile.jpg" alt="Profile" className="profile-pic" />
          </div>
        </div>
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll to see projects</span>
          <span className="arrow-down">▼</span>
        </div>
      </section>
      <section className="fullscreen-section" id="about-section">
        <h2 className="about-heading">About Me</h2>
        <p className="about-text">
          This is a longer bio or introduction. Share your story, background, skills, and what makes you unique! You can talk about your education, work experience, hobbies, or anything else you'd like visitors to know.
        </p>
      </section>
      <section className="fullscreen-section" id="projects-section">
        <h2 className="projects-heading">Projects</h2>
        <div className="projects-list">
          <div className="project-card">
            <h3>Project Title 1</h3>
            <p>Short description of your project. What does it do? Why is it cool?</p>
          </div>
          <div className="project-card">
            <h3>Project Title 2</h3>
            <p>Short description of your project. What does it do? Why is it cool?</p>
          </div>
          <div className="project-card">
            <h3>Project Title 3</h3>
            <p>Short description of your project. What does it do? Why is it cool?</p>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="contact-me">
          <h3>Contact Me</h3>
          <p>Email: your.email@example.com</p>
          <p>Or add your social links here</p>
        </div>
      </footer>
    </div>
  )
}

export default App
