
import React, { useEffect, useState } from "react";
import "./App.css";

const WHATSAPP = "923340195132";

const projects = [
  {
    title: "Aveda Beauty Salon",
    category: "Beauty & Lifestyle",
    description:
      "An elegant, responsive beauty salon website with a modern layout, service showcase, and smooth browsing experience.",
    images: [
      "/images/aveda-home.jpg",
      "/images/aveda-about.jpg",
      "/images/aveda-services.jpg",
      "/images/aveda-why-us.jpg",
    ],
    stack: ["React", "CSS", "Responsive Design"],
    status: "Completed",
  },
  {
    title: "FTS Store",
    category: "E-commerce & Android App",
    description:
      "An online shopping platform with a responsive storefront and a published Android application.",
    images: [
      "/images/fts-home.jpg",
      "/images/fts-features.jpg",
    ],
    stack: ["React", "JavaScript", "Android"],
    status: "Published",
    link: "https://apkpure.com/fts-store/com.ftsstore.app",
  },
  {
    title: "Akram Traders",
    category: "Business Management System",
    description:
      "An in-development business solution featuring rice ordering, inventory, billing, customer accounts, and operational management.",
    images: [],
    stack: ["React", "Supabase", "Business Software"],
    status: "Under Development",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Node.js",
  "Supabase",
  "MySQL",
  "Java",
  "C++",
  "E-commerce",
  "Responsive Design",
  "AI Integration",
];

const services = [
  {
    icon: "◈",
    title: "Web Development",
    description:
      "Fast, responsive, and professional websites built for modern businesses.",
  },
  {
    icon: "▣",
    title: "E-commerce Solutions",
    description:
      "Online stores designed to showcase products and simplify shopping.",
  },
  {
    icon: "◇",
    title: "App Development",
    description:
      "Practical Android and web applications with user-friendly interfaces.",
  },
  {
    icon: "✧",
    title: "AI & Automation",
    description:
      "AI-powered features and automation solutions for business workflows.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Completed", "Published", "Under Development"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.status === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activeFilter]);

  useEffect(() => {
    if (!selectedImage) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedImage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          HADY<span>TECH</span>
          <small>SOLUTIONS</small>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Services", "Projects", "Skills", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            )
          )}
        </nav>

        <a
          className="nav-contact"
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire Me ↗
        </a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>

          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot"></span>
              OPEN FOR NEW PROJECTS
            </div>

            <p className="eyebrow">WELCOME TO HADY TECH SOLUTIONS</p>

            <h1>
              Turning Ideas Into
              <span className="gradient-text"> Digital Reality.</span>
            </h1>

            <p className="hero-description">
              I build modern websites, e-commerce platforms,
              Android apps, and smart digital solutions that
              help businesses grow.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>

              <a
                className="btn secondary"
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  "Hello Hady Tech Solutions! I would like to discuss a project."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Let's Work Together
              </a>
            </div>

            <div className="hero-highlights">
              <div>
                <strong>03</strong>
                <span>Featured Projects</span>
              </div>
              <div>
                <strong>12</strong>
                <span>Technical Skills</span>
              </div>
              <div>
                <strong>01</strong>
                <span>Published App</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-ring">
              <div className="visual-core">
                <span className="core-symbol">{"</>"}</span>
                <strong>HADY TECH</strong>
                <small>BUILD • CREATE • INNOVATE</small>
              </div>
            </div>
            <span className="floating-label label-one">React.js</span>
            <span className="floating-label label-two">Web & Apps</span>
            <span className="floating-label label-three">AI Solutions</span>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading reveal">
            <span className="eyebrow">GET TO KNOW ME</span>
            <h2>
              Passionate About <span>Technology.</span>
            </h2>
          </div>

          <div className="about-layout">
            <div className="about-art reveal">
              <div className="about-art-inner">
                <span>{"{ code }"}</span>
                <strong>DESIGN.</strong>
                <strong>DEVELOP.</strong>
                <strong>DELIVER.</strong>
              </div>
            </div>

            <div className="about-text reveal">
              <h3>Building Solutions That Make a Difference</h3>
              <p>
                I'm a passionate web and app developer working
                with modern technologies to create functional,
                attractive, and user-friendly digital products.
              </p>
              <p>
                Through Hady Tech Solutions, I focus on
                websites, online stores, Android applications,
                and custom business software.
              </p>
              <a href="#contact" className="text-link">
                Let's discuss your project ↗
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-heading center reveal">
            <span className="eyebrow">WHAT I OFFER</span>
            <h2>
              My <span>Services</span>
            </h2>
            <p>
              Digital solutions designed for real business needs.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card reveal" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading center reveal">
            <span className="eyebrow">SELECTED WORK</span>
            <h2>
              Featured <span>Projects</span>
            </h2>
            <p>
              A collection of websites, apps, and business
              solutions I've been working on.
            </p>
          </div>

          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "filter active" : "filter"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-preview">
                  {project.images.length > 0 ? (
                    <button
                      className="main-preview-button"
                      onClick={() => setSelectedImage(project.images[0])}
                      aria-label={`View ${project.title}`}
                    >
                      <img
                        src={project.images[0]}
                        alt={`${project.title} website preview`}
                        loading="lazy"
                      />
                      <span className="preview-overlay">
                        View Project Gallery ↗
                      </span>
                    </button>
                  ) : (
                    <div className="coming-soon-preview">
                      <span className="coming-icon">⌘</span>
                      <strong>AKRAM TRADERS</strong>
                      <small>BUSINESS MANAGEMENT SYSTEM</small>
                      <span className="development-pill">
                        Development in Progress
                      </span>
                    </div>
                  )}
                </div>

                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span
                      className={
                        project.status === "Under Development"
                          ? "status development"
                          : "status completed"
                      }
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-tags">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  {project.images.length > 0 && (
                    <div className="project-gallery">
                      {project.images.map((image, index) => (
                        <button
                          key={image}
                          onClick={() => setSelectedImage(image)}
                          aria-label={`Open ${project.title} screenshot ${
                            index + 1
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {project.link && (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Published App ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading center reveal">
            <span className="eyebrow">MY TOOLKIT</span>
            <h2>
              Technologies & <span>Skills</span>
            </h2>
          </div>

          <div className="skills-list reveal">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-panel reveal">
            <span className="eyebrow">HAVE AN IDEA?</span>
            <h2>
              Let's Build Something <span>Amazing.</span>
            </h2>
            <p>
              Looking for a professional website, e-commerce
              store, or custom app? Let's bring your project
              to life.
            </p>

            <a
              className="btn primary"
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                "Hello! I'm interested in your web and app development services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a Conversation ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="footer-logo">
          HADY<span>TECH</span>
        </a>
        <p>
          © {new Date().getFullYear()} Hady Tech Solutions.
          All Rights Reserved.
        </p>
        <a href="#home" className="back-top">
          Back to Top ↑
        </a>
      </footer>

      {selectedImage && (
        <div
          className="image-modal"
          role="presentation"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="close-modal"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Full-size project screenshot"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default App;
