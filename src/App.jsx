
import React, { useEffect, useState } from "react";
import "./App.css";

const WHATSAPP = "923340195132";
const EMAIL = "yahebeh42@gmail.com";
const LINKEDIN =
  "https://www.linkedin.com/in/hady-yousaf-a26139440";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const projects = [
  {
    title: "Aveda Beauty Salon",
    category: "Beauty & Lifestyle Website",
    description:
      "An elegant, responsive beauty salon website featuring a modern homepage, services, business information, and an intuitive browsing experience.",
    images: [
      "/images/aveda-home.jpg",
      "/images/aveda-about.jpg",
      "/images/aveda-services.jpg",
      "/images/aveda-why-us.jpg",
    ],
    stack: ["React", "CSS", "Responsive Design"],
    status: "Completed",
    link: null,
    linkLabel: null,
  },
  {
    title: "FTS Store",
    category: "E-commerce & Android App",
    description:
      "A responsive online shopping platform with product browsing, shopping cart, checkout, and a published Android application.",
    images: [
      "/images/fts-home.jpg",
      "/images/fts-features.jpg",
      "/images/fts-checkout.jpg",
    ],
    stack: ["React", "JavaScript", "Android"],
    status: "Published",
    link: "https://apkpure.com/fts-store/com.ftsstore.app",
    linkLabel: "View Published App",
  },
  {
    title: "Akram Traders",
    category: "Business Management System",
    description:
      "An in-development business solution featuring rice ordering, inventory management, billing, customer accounts, and operational workflows.",
    images: [],
    stack: ["React", "Supabase", "Business Software"],
    status: "Under Development",
    link: null,
    linkLabel: null,
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
      "Modern, fast, responsive websites designed to give your business a professional online presence.",
  },
  {
    icon: "▣",
    title: "E-commerce Solutions",
    description:
      "User-friendly online stores with product catalogs, shopping carts, and streamlined checkout experiences.",
  },
  {
    icon: "◇",
    title: "App Development",
    description:
      "Practical Android and web applications with intuitive interfaces and useful features.",
  },
  {
    icon: "✧",
    title: "AI & Automation",
    description:
      "Custom AI features and automation solutions to simplify business workflows.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Completed",
    "Published",
    "Under Development",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.status === activeFilter
        );

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(
        (element) => element.classList.add("visible")
      );
      return;
    }

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

    document.querySelectorAll(".reveal").forEach(
      (element) => observer.observe(element)
    );

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
      document.removeEventListener(
        "keydown",
        closeOnEscape
      );
    };
  }, [selectedImage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          HADY<span>TECH</span>
          <small>SOLUTIONS</small>
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          className={
            menuOpen ? "nav-links open" : "nav-links"
          }
        >
          {[
            "Home",
            "About",
            "Services",
            "Projects",
            "Skills",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          className="nav-contact"
          href={whatsappLink(
            "Hello Hady Tech Solutions! I would like to discuss a project."
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire Me ↗
        </a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              AVAILABLE FOR FREELANCE PROJECTS
            </div>

            <p className="eyebrow">
              WELCOME TO HADY TECH SOLUTIONS
            </p>

            <h1>
              Turning Ideas Into
              <span className="gradient-text">
                {" "}Digital Reality.
              </span>
            </h1>

            <p className="hero-description">
              I create modern websites, e-commerce
              stores, Android apps, and smart digital
              solutions that help businesses build
              their online presence.
            </p>

            <p className="hero-description">
              <strong>Hady Yousaf</strong> — Founder
              &amp; CEO of Hady Tech Solutions,
              specializing in AI and full-stack
              web and app development.
            </p>

            <div className="hero-actions">
              <a
                className="btn primary"
                href="#projects"
              >
                Explore My Work <span>↗</span>
              </a>

              <a
                className="btn secondary"
                href={whatsappLink(
                  "Hello! I would like to discuss a website or app development project."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Let's Work Together
              </a>

              <a
                className="btn secondary"
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                  "Project Inquiry - Hady Tech Solutions"
                )}`}
              >
                Email Me ↗
              </a>
            </div>

            <div className="hero-highlights">
              <div>
                <strong>
                  {String(projects.length).padStart(2, "0")}
                </strong>
                <span>Featured Projects</span>
              </div>

              <div>
                <strong>
                  {String(skills.length).padStart(2, "0")}
                </strong>
                <span>Technical Skills</span>
              </div>

              <div>
                <strong>
                  {String(
                    projects.filter(
                      (project) =>
                        project.status === "Published"
                    ).length
                  ).padStart(2, "0")}
                </strong>
                <span>Published App</span>
              </div>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-hidden="true"
          >
            <div className="visual-ring">
              <div className="visual-core">
                <span className="core-symbol">
                  {"</>"}
                </span>
                <strong>HADY TECH</strong>
                <small>
                  BUILD • CREATE • INNOVATE
                </small>
              </div>
            </div>

            <span className="floating-label label-one">
              React.js
            </span>
            <span className="floating-label label-two">
              Web & Apps
            </span>
            <span className="floating-label label-three">
              AI Solutions
            </span>
          </div>
        </section>

        <section
          id="about"
          className="section about-section"
        >
          <div className="section-heading reveal">
            <span className="eyebrow">
              GET TO KNOW ME
            </span>
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
              <h3>
                Hady Yousaf — Founder &amp; CEO
                of Hady Tech Solutions
              </h3>

              <p>
                I'm Hady Yousaf, the Founder and
                CEO of Hady Tech Solutions, a
                technology brand established in
                2026 in Pakistan.
              </p>

              <p>
                I specialize in AI, full-stack
                web and app development, React.js,
                Node.js, Supabase, e-commerce
                solutions, and business automation.
              </p>

              <p>
                Through Hady Tech Solutions, I
                develop business websites, online
                stores, Android applications, and
                custom business software designed
                to solve practical problems.
              </p>

              <p>
                My goal is to help businesses
                strengthen their digital presence
                through modern, responsive,
                user-friendly technology.
              </p>

              <a
                href={LINKEDIN}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with Founder Hady Yousaf
                on LinkedIn ↗
              </a>

              <p style={{ marginTop: "18px" }}>
                <a
                  href="#contact"
                  className="text-link"
                >
                  Let's discuss your project ↗
                </a>
              </p>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="section services-section"
        >
          <div className="section-heading center reveal">
            <span className="eyebrow">
              WHAT I OFFER
            </span>
            <h2>
              My <span>Services</span>
            </h2>
            <p>
              Practical digital solutions for
              businesses and entrepreneurs.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article
                className="service-card reveal"
                key={service.title}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="section projects-section"
        >
          <div className="section-heading center reveal">
            <span className="eyebrow">
              SELECTED WORK
            </span>
            <h2>
              Featured <span>Projects</span>
            </h2>
            <p>
              Explore my websites, e-commerce
              applications, and business
              software projects.
            </p>
          </div>

          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={
                  activeFilter === filter
                    ? "filter active"
                    : "filter"
                }
                onClick={() =>
                  setActiveFilter(filter)
                }
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article
                className="project-card reveal"
                key={project.title}
              >
                <div className="project-preview">
                  {project.images.length > 0 ? (
                    <button
                      type="button"
                      className="main-preview-button"
                      onClick={() =>
                        setSelectedImage(
                          project.images[0]
                        )
                      }
                      aria-label={`View ${project.title}`}
                    >
                      <img
                        src={project.images[0]}
                        alt={`${project.title} preview`}
                        loading="lazy"
                      />
                      <span className="preview-overlay">
                        View Project Gallery ↗
                      </span>
                    </button>
                  ) : (
                    <div className="coming-soon-preview">
                      <span className="coming-icon">
                        ⌘
                      </span>
                      <strong>
                        AKRAM TRADERS
                      </strong>
                      <small>
                        BUSINESS MANAGEMENT SYSTEM
                      </small>
                      <span className="development-pill">
                        Development in Progress
                      </span>
                    </div>
                  )}
                </div>

                <div className="project-content">
                  <div className="project-meta">
                    <span>
                      {project.category}
                    </span>
                    <span
                      className={
                        project.status ===
                        "Under Development"
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
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.images.length > 0 && (
                    <div className="project-gallery">
                      {project.images.map(
                        (image, index) => (
                          <button
                            type="button"
                            key={image}
                            onClick={() =>
                              setSelectedImage(image)
                            }
                            aria-label={`Open ${project.title} screenshot ${
                              index + 1
                            }`}
                          >
                            <img
                              src={image}
                              alt={`${project.title} screenshot ${
                                index + 1
                              }`}
                              loading="lazy"
                            />
                          </button>
                        )
                      )}
                    </div>
                  )}

                  {project.link && (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkLabel} ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="section skills-section"
        >
          <div className="section-heading center reveal">
            <span className="eyebrow">
              MY TOOLKIT
            </span>
            <h2>
              Technologies &amp; <span>Skills</span>
            </h2>
          </div>

          <div className="skills-list reveal">
            {skills.map((skill) => (
              <span key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="section contact-section"
        >
          <div className="contact-panel reveal">
            <span className="eyebrow">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's Build Something{" "}
              <span>Amazing.</span>
            </h2>

            <p>
              Need a professional website,
              e-commerce store, Android
              application, or custom digital
              solution? Let's talk about your idea.
            </p>

            <div
              className="hero-actions"
              style={{
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                className="btn primary"
                href={whatsappLink(
                  "Hello Hady Tech Solutions! I have a project and would like to discuss the details."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact on WhatsApp ↗
              </a>

              <a
                className="btn secondary"
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                  "Project Inquiry - Hady Tech Solutions"
                )}&body=${encodeURIComponent(
                  "Hello Hady Tech Solutions,\n\nI would like to discuss a project.\n\nProject details:\n\n"
                )}`}
              >
                Send an Email ↗
              </a>
            </div>

            <p style={{ marginTop: "24px" }}>
              Email:{" "}
              <a href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>

            <p style={{ marginTop: "12px" }}>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hady Yousaf — LinkedIn ↗
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="footer-logo">
          HADY<span>TECH</span>
        </a>

        <p>
          © {new Date().getFullYear()}{" "}
          Hady Tech Solutions.
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
            type="button"
            className="close-modal"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Full-size project screenshot"
            onClick={(event) =>
              event.stopPropagation()
            }
          />
        </div>
      )}
    </div>
  );
}

export default App;
