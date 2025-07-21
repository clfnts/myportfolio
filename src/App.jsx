import './App.css'
import { useState, useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

function App() {
  // Smooth scroll handler
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home-section');
  const timerRef = useRef(null);
  const handleMenuClick = () => setMenuOpen((open) => !open);
  const handleNavClick = (id) => {
    scrollToSection(id);
    setActiveSection(id);
    setMenuOpen(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setActiveSection(''), 600);
  };

  useEffect(() => {
    const handleScroll = () => {
      setActiveSection('');
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Confetti handler for move.GIF
  const handleMoveGifClick = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { x: 0.08, y: 0.85 }, // further left above the gif
      zIndex: 2000,
    });
  };

  // Toggle cartoon image
  const [cartoonSrc, setCartoonSrc] = useState('cartoon.PNG');
  const handleCartoonClick = () => {
    setCartoonSrc(src => src === 'cartoon.PNG' ? 'cartoon2.PNG' : 'cartoon.PNG');
  };

  return (
    <>
      <div className="portfolio-container">
        <header className="site-header">
          <nav className="site-nav">
            <button
              className={activeSection === 'home-section' ? 'active' : ''}
              onClick={() => handleNavClick('home-section')}
            >
              Home
            </button>
            <button
              className={activeSection === 'about-section' ? 'active' : ''}
              onClick={() => handleNavClick('about-section')}
            >
              About
            </button>
            <button
              className={activeSection === 'projects-section' ? 'active' : ''}
              onClick={() => handleNavClick('projects-section')}
            >
              Projects
            </button>
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
              <h1 className="portfolio-title">Dolcielo B. Fuentes</h1>
              <p className="portfolio-description">Information Technology Professional | Passionate about programming, web development, and building robust, user-friendly applications.</p>
            </div>
            <img src="profile.PNG" alt="Profile" className="profile-pic" />
          </div>
        </section>
        <section className="fullscreen-section" id="about-section" style={{marginBottom: '4rem'}}>
          <h2 className="about-heading">About Me</h2>
          <p className="about-text">
            I am a passionate and skilled Information Technology professional with a Bachelor's degree from De La Salle University - Dasmariñas. My expertise spans various aspects of programming and web development, including both frontend and backend technologies. I have hands-on experience with a range of tools and software, allowing me to build robust and user-friendly applications.<br/><br/>
            <b>Education:</b><br/>
            De La Salle University - Dasmariñas<br/>
            Bachelor's degree in Information Technology<br/><br/>
            <b>Technical Skills:</b><br/>
            <u>Programming & Web Development</u><br/>
            Frontend: HTML, CSS, JavaScript, ASPX, React, and Vite.<br/>
            Backend: Node.js, Express, and PHP<br/>
            Framework: MERN, ASP.NET, and Flutter<br/>
            Database: MongoDB, MS Access, MySQL, MSSQL<br/>
            CMS / Web Platforms: WordPress<br/>
            <u>Tools & Software</u><br/>
            Development Tools: VS Code, Visual Studio, Android Studio, and GitHub.<br/>
            Design Tools: Figma, Adobe Photoshop, Adobe Illustrator, and Canva.<br/>
            Office Tools: Word, Excel, and PowerPoint<br/><br/>
            <b>Soft Skills:</b> Problem-Solving, Collaboration, Leadership, Time Management, Adaptability, Learning Agility, Creativity
            <br/><br/>
            <b>Social Media:</b><br/>
            <a href="https://www.linkedin.com/in/dolcielo-fuentes-75554a33a/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
            <a href="https://github.com/clfnts" target="_blank" rel="noopener noreferrer">GitHub</a> |
            <a href="/resume.pdf" download>Resume (PDF)</a>
          </p>
        </section>
        <section className="fullscreen-section" id="projects-section" style={{paddingTop: 0, paddingLeft: '2rem', paddingRight: '2rem'}}>
          <div className="projects-heading">Projects</div>
          <div className="projects-list">
            <div className="project-card">
              <h3>Self-Employed Business Owner</h3>
              <p>Managed a successful Shopee account for handmade products and digital stickers.</p>
              <button className="details-btn">View Details</button>
            </div>
            <div className="project-card">
              <h3>Internship - WPP Marketing Communications</h3>
              <p>Developed internal tools and a CRM website as part of a professional IT team.</p>
              <button className="details-btn">View Details</button>
            </div>
            <div className="project-card">
              <h3>Leadership Experience</h3>
              <p>Led a student organization, planned events, and managed a team in Grade 12.</p>
              <button className="details-btn">View Details</button>
            </div>
            <div className="project-card">
              <h3>SHUTL. (Capstone Project)</h3>
              <p>Shuttle locator web app with real-time tracking and analytics (MERN stack).</p>
              <a
                className="details-btn"
                href="https://www.canva.com/design/DAGiCePheCs/oS3cmU9BKUXPZgZ4WMR8LQ/edit?utm_content=DAGiCePheCs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>
            </div>
            <div className="project-card">
              <h3>Wing 'N Grill</h3>
              <p>Online info management website to enhance sales for a local restaurant.</p>
              <button className="details-btn">View Details</button>
            </div>
            <div className="project-card">
              <h3>ESTU LMS UI Platform</h3>
              <p>Designed a modern, intuitive UI for a learning management system in Figma.</p>
              <button className="details-btn">View Details</button>
            </div>
            <div className="project-card">
              <h3>Online Inventory System of MC Fmly</h3>
              <p>Engineered an inventory system with stock management and reporting features.</p>
              <button className="details-btn">View Details</button>
            </div>
            <div className="project-card">
              <h3>BarbedFlower E-Commerce</h3>
              <p>Developed an e-commerce platform with ASP.NET and SQLBase integration.</p>
              <button className="details-btn">View Details</button>
            </div>
          </div>
        </section>
        <footer className="site-footer">
          <div style={{ textAlign: 'center', color: '#fff', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1.2rem', fontSize: '1rem' }}>
            <span>Email: dolcielo.fuentes@email.com</span>
            <span style={{fontWeight: 'bold'}}>|</span>
            <span>LinkedIn: linkedin.com/in/dolcielofuentes</span>
            <span style={{fontWeight: 'bold'}}>|</span>
            <span>GitHub: github.com/dolcielofuentes</span>
            <span style={{fontWeight: 'bold'}}>|</span>
            <span>Technologies used: Vite, React, JavaScript, CSS</span>
          </div>
        </footer>
      </div>
      <div className="floating-cartoon" onClick={handleCartoonClick} style={{ cursor: 'pointer' }}>
        <img src={cartoonSrc} alt="Cartoon" />
      </div>
      <div className="floating-move-gif" onClick={handleMoveGifClick} style={{ cursor: 'pointer' }}>
        <img src="move.GIF" alt="Move GIF" />
      </div>
      <img src="Dolcielo.png" alt="Dolcielo Fuentes Logo" className="floating-logo-topright" />
    </>
  )
}

export default App
