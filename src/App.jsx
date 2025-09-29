import './App.css'
import { useState, useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

const projectDetails = [
	{
		title: 'Self-Employed Business Owner',
		short: 'Managed a successful Shopee account for handmade products and digital stickers.',
		details: (
			<>
				<b>Digital Creator / Business Owner</b>
				<br />
				Self-Employed – Shopee Store
				<br />
				📍 Remote | 🗓️ 2019 – 2023
				<br />
				• Created and sold handmade products and digital stickers
				<br />
				• Designed assets using Procreate, Illustrator, Photoshop
				<br />
				• Managed customer service, logistics, and fulfillment
				<br />
				• Maintained a 5-star rating for service and creativity
			</>
		),
	},
	{
		title: 'Internship - WPP Marketing Communications',
		short: 'Developed internal tools and a CRM website as part of a professional IT team.',
		details: (
			<>
				<b>Full Stack Developer Intern</b>
				<br />
				WPP Marketing Communications Inc. (J. Walter Thompson Philippines)
				<br />
				📍 Makati | 🗓️ Feb – May 2025
				<br />
				• Built a full-stack CRM using MongoDB, Next.js, Passport.js, and Tanstack Query
				<br />
				• Developed backend APIs and automated internal emails using Appscript
				<br />
				• Collaborated on UI/UX, testing, and sidebar enhancements
			</>
		),
	},
	{
		title: 'Leadership Experience',
		short: 'Led a student organization, planned events, and managed a team in Grade 12.',
		details: (
			<>
				<b>Student Leader – Senior High School</b>
				<br />
				STI College Bacoor | 2019–2021
				<br />
				• Organized events, led meetings, and coordinated with administrators
				<br />
				• Fostered collaboration and maintained group productivity
			</>
		),
	},
	{
		title: 'SHUTL. (Capstone Project)',
		short: 'Shuttle locator web app with real-time tracking and analytics (MERN stack).',
		details: (
			<>
				<b>SHUTL. (Capstone Project)</b>
				<br />
				Shuttle locator system with real-time tracking and analytics
				<br />
				A real-time shuttle locator web app with GPS tracking, chat system, admin dashboard, and analytics.
				<br />
				• Role: Documentation, Project Manager, Frontend, & Partial Backend Developer
				<br />
				• Built using Node.js, Express.js, MongoDB, Socket.io, and OpenStreetMap API
				<br />
				• Features: include live shuttle tracking, user management, reporting tools, and Linux-based deployment
				<br />
				<a
					href="https://www.canva.com/design/DAGiCePheCs/oS3cmU9BKUXPZgZ4WMR8LQ/edit?utm_content=DAGiCePheCs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
					target="_blank"
					rel="noopener noreferrer"
				>
					Project Demo/Design
				</a>
			</>
		),
	},
	{
		title: "Wing 'N Grill",
		short: 'Online info management website to enhance sales for a local restaurant.',
		details: (
			<>
				<b>Wing 'N Grill</b>
				<br />
				Online info management website to enhance sales for a local restaurant.
				<br />
				<i>Details coming soon.</i>
			</>
		),
	},
	{
		title: 'ESTU LMS UI Platform',
		short: 'Designed a modern, intuitive UI for a learning management system in Figma.',
		details: (
			<>
				<b>ESTU LMS UI Platform</b>
				<br />
				• Designed user-friendly LMS UI in Figma to enhance accessibility
			</>
		),
	},
	{
		title: 'Online Inventory System of MC Fmly',
		short: 'Engineered an inventory system with stock management and reporting features.',
		details: (
			<>
				<b>MC Fmly Online Inventory System</b>
				<br />
				• Built a PHP-based system for stock management and reporting
			</>
		),
	},
	{
		title: 'BarbedFlower E-Commerce',
		short: 'Developed an e-commerce platform with ASP.NET and SQLBase integration.',
		details: (
			<>
				<b>BarbedFlower E-Commerce Platform</b>
				<br />
				• Developed using ASP.NET and SQLBase with class libraries and dynamic pages
			</>
		),
	},
];

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
	const elementRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			options
		);

		const currentElement = elementRef.current;
		if (currentElement) {
			observer.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				observer.unobserve(currentElement);
			}
		};
	}, [options]);

	return [elementRef, isVisible];
};

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
		setCartoonSrc((src) => (src === 'cartoon.PNG' ? 'cartoon2.PNG' : 'cartoon.PNG'));
	};

	const [openProject, setOpenProject] = useState(null);

	// Section refs for intersection observer
	const [homeRef, homeVisible] = useIntersectionObserver({ threshold: 0.1 });
	const [aboutRef, aboutVisible] = useIntersectionObserver({ threshold: 0.1 });
	const [projectsRef, projectsVisible] = useIntersectionObserver({ threshold: 0.1 });

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
							Achievements
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
							<button onClick={() => handleNavClick('projects-section')}>Achievements</button>
						</div>
					)}
				</header>
				<section
					className={`home-section fade-in-section ${homeVisible ? 'visible' : ''}`}
					id="home-section"
					ref={homeRef}
				>
					<div className="home-content">
						<div className="home-text">
							<h1 className="portfolio-title">Dolcielo B. Fuentes</h1>
							<p className="portfolio-description">
								Information Technology Professional | Passionate about programming, web development, and building
								robust, user-friendly applications.
							</p>
							<a
								href="/resume.pdf"
								download
								className="download-resume-btn"
								style={{
									display: 'inline-block',
									marginTop: '1.2rem',
									padding: '0.7em 1.6em',
									fontSize: '1.1rem',
									fontWeight: 600,
									color: '#fff',
									background: '#a60000',
									border: 'none',
									borderRadius: '2rem',
									textDecoration: 'none',
									boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
									transition: 'background 0.18s, color 0.18s',
								}}
								onMouseOver={(e) => (e.currentTarget.style.background = '#7a0000')}
								onMouseOut={(e) => (e.currentTarget.style.background = '#a60000')}
							>
								Download Resume
							</a>
						</div>
						<img src="profile.PNG" alt="Profile" className="profile-pic" />
					</div>
				</section>
				<section
					className={`fullscreen-section fade-in-section ${aboutVisible ? 'visible' : ''}`}
					id="about-section"
					style={{ marginBottom: '4rem' }}
					ref={aboutRef}
				>
					<h2 className="about-heading">About Me</h2>
					<div className="about-text" style={{ whiteSpace: 'pre-line' }}>
						<b>Dolcielo B. Fuentes</b>
						<br />
						Information Technology specialized in Web Development Professional
						<br />
						Cavite, Philippines | dolcielofuentes03@gmail.com | +63 9761538500 | GitHub:{' '}
						<a
							href="https://github.com/clfnts"
							target="_blank"
							rel="noopener noreferrer"
						>
							github.com/clfnts
						</a>
						<br />
						<br />
						<b>Professional Summary</b>
						<br />
						Hi! I’m a tech-savvy and passionate IT graduate from De La Salle University - Dasmariñas. I specialize in
						web development and digital design, with hands-on experience building full-stack applications, backend
						systems, and user-friendly interfaces. I'm a fast learner, team player, and love using technology to
						create functional and visually appealing solutions.
						<br />
						<br />
						<b>Education</b>
						<br />
						De La Salle University - Dasmariñas
						<br />
						Bachelor of Science in Information Technology
						<br />
						2021 – 2025
						<br />
						<div style={{ marginBottom: '2.5rem' }}></div>
					</div>
				</section>
				<section
					className={`fullscreen-section fade-in-section ${projectsVisible ? 'visible' : ''}`}
					id="projects-section"
					style={{ paddingTop: 0, paddingLeft: '2rem', paddingRight: '2rem' }}
					ref={projectsRef}
				>
					<div className="projects-heading">Achievements</div>
					<div className="projects-list">
						{projectDetails.map((proj, idx) => (
							<div className="project-card" key={proj.title}>
								<h3>{proj.title}</h3>
								<p>{proj.short}</p>
								<button className="details-btn" onClick={() => setOpenProject(idx)}>
									View Details
								</button>
							</div>
						))}
					</div>
					<div
						style={{
							display: 'none',
							width: '100%',
							maxWidth: '1200px',
							height: '60px',
							background: '#fff',
							borderRadius: '1.2rem',
							margin: '2rem auto 0 auto',
							boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)',
							alignItems: 'center',
							justifyContent: 'center',
							color: '#a60000',
							fontWeight: 600,
							fontSize: '1.2rem',
						}}
					>
						{/* You can put any content here, or leave it as a decorative rectangle */}
					</div>
				</section>
				{openProject !== null && (
					<div
						className="modal-overlay"
						style={{
							position: 'fixed',
							top: 0,
							left: 0,
							width: '100vw',
							height: '100vh',
							background: 'rgba(0,0,0,0.5)',
							zIndex: 2000,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
						onClick={() => setOpenProject(null)}
					>
						<div
							className="modal-content"
							style={{
								background: '#fff',
								color: '#181b1b',
								padding: '2rem',
								borderRadius: '1.2rem',
								maxWidth: '95vw',
								maxHeight: '90vh',
								overflowY: 'auto',
								boxShadow: '0 4px 32px 0 rgba(0,0,0,0.18)',
							}}
							onClick={(e) => e.stopPropagation()}
						>
							<button
								style={{
									float: 'right',
									background: 'none',
									border: 'none',
									fontSize: '1.5rem',
									cursor: 'pointer',
									color: '#a60000',
								}}
								onClick={() => setOpenProject(null)}
							>
								&times;
							</button>
							<h2 style={{ marginTop: 0 }}>{projectDetails[openProject].title}</h2>
							<div style={{ marginTop: '1.2rem', fontSize: '1.1rem' }}>
								{projectDetails[openProject].details}
							</div>
						</div>
					</div>
				)}
				<footer className="site-footer">
					<div
						style={{
							textAlign: 'center',
							color: '#fff',
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'center',
							alignItems: 'center',
							gap: '1.2rem',
							fontSize: '1rem',
						}}
					>
						<a
							href="https://mail.google.com/mail/?view=cm&fs=1&to=dolcielofuentes03@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: '#fff', textDecoration: 'underline' }}
						>
							Email: dolcielofuentes03@gmail.com
						</a>
						<span style={{ fontWeight: 'bold' }}>|</span>
						<a
							href="https://www.linkedin.com/in/dolcielo-fuentes"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: '#fff', textDecoration: 'underline' }}
						>
							LinkedIn: @https://www.linkedin.com/in/dolcielo-fuentes
						</a>
						<span style={{ fontWeight: 'bold' }}>|</span>
						<a
							href="https://github.com/clfnts"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: '#fff', textDecoration: 'underline' }}
						>
							GitHub: @https://github.com/clfnts
						</a>
						<span style={{ fontWeight: 'bold' }}>|</span>
						<span>Technologies used: Vite, React, JavaScript, CSS</span>
					</div>
				</footer>
			</div>
			<div
				className="floating-cartoon"
				onClick={handleCartoonClick}
				style={{ cursor: 'pointer', bottom: '40px', right: '20px', position: 'fixed' }}
			>
				<img src={cartoonSrc} alt="Cartoon" />
			</div>
			<div
				className="floating-move-gif"
				onClick={handleMoveGifClick}
				style={{ cursor: 'pointer', bottom: '40px', left: '30px', position: 'fixed' }}
			>
				<img src="move.GIF" alt="Move GIF" />
			</div>
			<img
				src="Dolcielo.png"
				alt="Dolcielo Fuentes Logo"
				className="floating-logo-topright"
			/>
		</>
	);
}

export default App;
