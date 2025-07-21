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
    <>
      <div className="portfolio-container">
        <header className="site-header">
          <span className="site-title">Dolcielo Fuentes</span>
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
              <h1 className="portfolio-title">Dolcielo B. Fuentes</h1>
              <p className="portfolio-description">Information Technology Professional | Passionate about programming, web development, and building robust, user-friendly applications.</p>
            </div>
            <div className="profile-pic-placeholder">
              <img src="profile.jpg" alt="Profile" className="profile-pic" />
            </div>
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
          </p>
        </section>
        <section className="fullscreen-section" id="projects-section" style={{paddingTop: 0, paddingLeft: '2rem', paddingRight: '2rem'}}>
          <div style={{ width: '100%', textAlign: 'center', margin: '0 0 0.5rem 0', fontWeight: 'bold', fontSize: '1.1rem', letterSpacing: '1px', color: '#0e1111', textTransform: 'uppercase' }}>Projects</div>
          <div className="projects-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(220px, 1fr))', gap: '2rem', width: '100%', paddingBottom: '1rem' }}>
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
              <button className="details-btn">View Details</button>
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
          <div className="contact-me">
            <h3>Contact Me</h3>
            <p>Email: dolcielo.fuentes@email.com</p>
            <p>LinkedIn: linkedin.com/in/dolcielofuentes | GitHub: github.com/dolcielofuentes</p>
          </div>
        </footer>
      </div>
      <div className="floating-cartoon">
        <img src="cartoon.PNG" alt="Cartoon" />
      </div>
    </>
  )
}

export default App
