import './App.css'

function App() {
  const handleNavClick = (event) => {
    event.preventDefault()
    const target = document.querySelector(event.currentTarget.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleFilterClick = (event) => {
    const selectedButton = event.currentTarget
    const category = selectedButton.dataset.filter

    document.querySelectorAll('.project-card').forEach((card) => {
      const matches = category === 'all' || card.dataset.category === category
      card.style.display = matches ? '' : 'none'
    })

    document.querySelectorAll('.filter-btn').forEach((button) => {
      const active = button === selectedButton
      button.classList.toggle('active', active)
      button.setAttribute('aria-pressed', String(active))
    })
  }

  return (
    <>
      {/* Navigation Bar */}
      <nav id="navbar">
          <div className="nav-brand">
              <span>Jake Xiang</span>
          </div>
          <ul className="nav-menu" id="nav-menu">
              <li><a href="#home" className="nav-link" onClick={handleNavClick}>Home</a></li>
              <li><a href="#about" className="nav-link" onClick={handleNavClick}>About</a></li>
              <li><a href="#skills" className="nav-link" onClick={handleNavClick}>Skills</a></li>
              <li><a href="#projects" className="nav-link" onClick={handleNavClick}>Projects</a></li>
              <li><a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a></li>
          </ul>
          {/* Mobile menu toggle */}
          <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-controls="nav-menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
          </button>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="hero">
          <div className="hero-content">
              <h1 className="hero-title">Jake Xiang</h1>
              <p className="hero-subtitle">Data Engineer and Data Science Student at UC Berkeley</p>
              <p className="hero-tagline">Building data pipelines, data models, and web applications</p>
              <div className="hero-buttons">
                  <a href="#projects" className="btn btn-primary">View Projects</a>
                  <a href="#contact" className="btn btn-secondary">Get In Touch</a>
              </div>
          </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="section">
          <div className="container">
              <h2>About Me</h2>
              <div className="about-grid">
                  <div className="about-text">
                      <p>I am passionate about building with new technologies in data, from data pipelines to data models. Besides my academic and professional interests, I enjoy watching films, playing sports, and spending time in nature.</p>
                      <div className="about-details">
                          <div className="detail-item">
                              <span className="detail-icon">📍</span>
                              <span>San Mateo, California</span>
                          </div>
                          <div className="detail-item">
                              <span className="detail-icon">✉️</span>
                              <a href="mailto:jakex@berkeley.edu">jakex@berkeley.edu</a>
                          </div>
                      </div>
                  </div>
                  <div className="about-availability">
                      <h3>Currently Available For:</h3>
                      <div className="availability-tags">
                          <span className="tag tag-available">Full-Time</span>
                          <span className="tag tag-available">Part-Time</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="section section-alt">
          <div className="container">
              <h2>Skills & Technologies</h2>
              <div className="skills-grid">
                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">⚛️</span>
                          <h3 className="skill-name">Python</h3>
                      </div>
                      <div className="skill-category">Programming</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{ '--skill-level': '90%' }}></div>
                      </div>
                      <span className="skill-percentage">90%</span>
                  </div>
      
                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">🎨</span>
                          <h3 className="skill-name">SQL</h3>
                      </div>
                      <div className="skill-category">Databases</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{ '--skill-level': '95%' }}></div>
                      </div>
                      <span className="skill-percentage">95%</span>
                  </div>
      
                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">📱</span>
                          <h3 className="skill-name">Java</h3>
                      </div>
                      <div className="skill-category">Programming</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{ '--skill-level': '88%' }}></div>
                      </div>
                      <span className="skill-percentage">88%</span>
                  </div>
      
                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">🚀</span>
                          <h3 className="skill-name">Full Stack Development</h3>
                      </div>
                      <div className="skill-category">Web Development</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{ '--skill-level': '85%' }}></div>
                      </div>
                      <span className="skill-percentage">85%</span>
                  </div>
      
                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">🎯</span>
                          <h3 className="skill-name">Data Engineering</h3>
                      </div>
                      <div className="skill-category">Data Pipelines</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{ '--skill-level': '80%' }}></div>
                      </div>
                      <span className="skill-percentage">80%</span>
                  </div>
      
                  <div className="skill-card">
                      <div className="skill-header">
                          <span className="skill-icon">🌐</span>
                          <h3 className="skill-name">Data Science</h3>
                      </div>
                      <div className="skill-category">Data Models</div>
                      <div className="skill-level">
                          <div className="skill-progress" style={{ '--skill-level': '75%' }}></div>
                      </div>
                      <span className="skill-percentage">75%</span>
                  </div>
              </div>
          </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="section">
          <div className="container">
              <h2>Featured Projects</h2>
              <div className="filter-buttons">
                  <button type="button" className="filter-btn active" data-filter="all" onClick={handleFilterClick} aria-pressed={true}>All Projects</button>
                  <button type="button" className="filter-btn" data-filter="fullstack" onClick={handleFilterClick} aria-pressed={false}>Full-Stack</button>
                  <button type="button" className="filter-btn" data-filter="datascience" onClick={handleFilterClick} aria-pressed={false}>Data Science</button>
              </div>
              <div className="projects-grid">
                  <div className="project-card featured" data-category="fullstack">
                      <div className="project-image">
                          <img src="https://via.placeholder.com/400x250/4f46e5/ffffff?text=Alumni+Portal" alt="Web Directory with Chatbot and Smart Member Matching" />
                          <div className="project-overlay">
                              <div className="project-links">
                                  <a href="#" className="project-link">
                                      <span>🔗</span> Live Demo
                                  </a>
                                  <a href="#" className="project-link">
                                      <span>💻</span> Code
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="project-content">
                          <div className="project-header">
                              <h3 className="project-title">Web Directory with Chatbot and Smart Member Matching</h3>
                              <span className="project-category">Full-Stack</span>
                          </div>
                          <p className="project-description">Built a fullstack alumni portal with React, Flask, and Google OAuth that grew alumni outreach. Used a Graph Convolutional Network for profile recommendations with a 0.82 ROC AUC</p>
                          <div className="project-tags">
                              <span className="project-tag">React</span>
                              <span className="project-tag">PyTorch</span>
                              <span className="project-tag">NetworkX</span>
                              <span className="project-tag">HTML</span>
                              <span className="project-tag">Flask</span>
                              <span className="project-tag">JavaScript</span>
                              <span className="project-tag">Python</span>
                              <span className="project-tag">OpenAI</span>
                              <span className="project-tag">Airtable</span>
                          </div>
                      </div>
                  </div>
      
                  <div className="project-card" data-category="datascience">
                      <div className="project-image">
                          <img src="https://via.placeholder.com/400x250/059669/ffffff?text=Revenue+Forecasting" alt="Universal Health Services Revenue Forecasting" />
                          <div className="project-overlay">
                              <div className="project-links">
                                  <a href="#" className="project-link">
                                      <span>🔗</span> Live Demo
                                  </a>
                                  <a href="#" className="project-link">
                                      <span>💻</span> Code
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="project-content">
                          <div className="project-header">
                              <h3 className="project-title">Universal Health Services Revenue Forecasting</h3>
                              <span className="project-category">Data Science</span>
                          </div>
                          <p className="project-description">Built linear and ARIMA time series regression models to forecast revenue and improve monthly revenue predictions. Applied Ridge Regression, Random Forest, Gradient Boosting, and Stacking Regressors to achieve an R squared above 0.8.</p>
                          <div className="project-tags">
                              <span className="project-tag">Python</span>
                              <span className="project-tag">Pandas</span>
                              <span className="project-tag">NumPy</span>
                              <span className="project-tag">Scikit-Learn</span>
                              <span className="project-tag">Statsmodels</span>
                              <span className="project-tag">TensorFlow</span>
                              <span className="project-tag">Keras</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section section-alt">
          <div className="container">
              <h2>Get In Touch</h2>
              <div className="contact-content">
                  <p>I'm always interested in hearing about new opportunities and projects. Feel free to reach out!</p>
      
                  {/* TODO: Add JavaScript to validate this form in real-time */}
                  <form id="contact-form" className="contact-form">
                      <div className="form-grid">
                          <div className="form-group">
                              <label htmlFor="name">Name *</label>
                              <input type="text" id="name" name="name" required />
                              {/* TODO: Add error message element here */}
                          </div>
      
                          <div className="form-group">
                              <label htmlFor="email">Email *</label>
                              <input type="email" id="email" name="email" required />
                              {/* TODO: Add error message element here */}
                          </div>
      
                          <div className="form-group form-group-full">
                              <label htmlFor="subject">Subject</label>
                              <input type="text" id="subject" name="subject" />
                          </div>
      
                          <div className="form-group form-group-full">
                              <label htmlFor="message">Message *</label>
                              <textarea id="message" name="message" rows="5" required></textarea>
                              {/* TODO: Add error message element here */}
                          </div>
      
                          <div className="form-group form-group-full">
                              <button type="submit" className="btn btn-primary">Send Message</button>
                          </div>
                      </div>
                      {/* TODO: Add success message element here */}
                  </form>
              </div>
          </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
          <div className="container">
              <div className="footer-content">
                  <p>&copy; 2026 Jake Xiang. All rights reserved.</p>
                  <div className="social-links">
                      <a href="https://github.com/JakeX05" className="social-link">GitHub</a>
                      <a href="mailto:jakex@berkeley.edu" className="social-link">Email</a>
                  </div>
              </div>
          </div>
      </footer>
    </>
  )
}

export default App
