import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      <section className="home-section">
        <header className="portfolio-header">
          <h1 className="portfolio-title">Your Name</h1>
          <p className="portfolio-description">A short description about yourself goes here. Add your passions, profession, or a fun fact!</p>
        </header>
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll to see projects</span>
          <span className="arrow-down">▼</span>
        </div>
      </section>
      <section className="portfolio-projects">
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
    </div>
  )
}

export default App
