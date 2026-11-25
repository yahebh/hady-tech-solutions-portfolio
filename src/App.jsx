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
      "A responsive beauty salon website developed by Hady Tech Solutions, featuring a modern homepage, service information, business details, and a user-friendly browsing experience.",
    images: [
      "/images/aveda-home.jpg",
      "/images/aveda-about.jpg",
      "/images/aveda-services.jpg",
      "/images/aveda-why-us.jpg",
    ],
    imageAlts: [
      "Aveda Beauty Salon responsive website homepage",
      "Aveda Beauty Salon about page",
      "Aveda Beauty Salon services page",
      "Aveda Beauty Salon why choose us section",
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
      "An e-commerce website and published Android application featuring product browsing, shopping cart functionality, and a streamlined checkout experience.",
    images: [
      "/images/fts-home.jpg",
      "/images/fts-features.jpg",
      "/images/fts-checkout.jpg",
    ],
    imageAlts: [
      "FTS Store e-commerce website homepage",
      "FTS Store online shopping features",
      "FTS Store shopping cart and checkout page",
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
      "A custom business management system under development, featuring rice ordering, inventory management, sales billing, customer accounts, and business automation workflows.",
    images: [],
    imageAlts: [],
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
    title: "Full-Stack Web Development",
    description:
      "Custom business websites, responsive landing pages, and full-stack web applications using React.js, Node.js, and modern database technologies.",
  },
  {
    icon: "▣",
    title: "E-commerce Website Development",
    description:
      "Professional online stores with product catalogs, shopping carts, checkout functionality, and user-friendly shopping experiences for businesses.",
  },
  {
    icon: "◇",
    title: "Web & Android App Development",
    description:
      "Custom Android and web applications designed around business requirements, intuitive interfaces, and practical functionality.",
  },
  {
    icon: "✧",
    title: "AI & Business Automation",
    description:
      "AI-powered applications, intelligent workflows, and custom business automation solutions designed to reduce repetitive manual work.",
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
          aria-label="Hady Tech Solutions homepage"
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
          aria-label="Main navigation"
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
        {/* HERO SECTION */}

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
              Hady Yousaf
              <span className="gradient-text">
                {" "}— Founder of Hady Tech Solutions.
              </span>
            </h1>

            <p className="hero-description">
              AI, full-stack web and app developer
              based in Pakistan, helping businesses
              build modern websites, e-commerce
              stores, Android applications, and
              intelligent automation solutions.
            </p>

            <p className="hero-description">
              Turning ideas into digital reality
              through practical, responsive, and
              user-friendly technology.
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

        {/* ABOUT SECTION */}

        <section
          id="about"
          className="section about-section"
        >
          <div className="section-heading reveal">
            <span className="eyebrow">
              GET TO KNOW ME
            </span>

            <h2>
              About <span>Hady Yousaf.</span>
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
                Founder &amp; CEO of Hady Tech Solutions
              </h3>

              <p>
                I'm Hady Yousaf, the Founder and
                CEO of Hady Tech Solutions, a
                technology brand established in
                2026 in Pakistan.
              </p>

              <p>
                I specialize in full-stack web
                development, Android applications,
                artificial intelligence, e-commerce
                development, and business automation.
              </p>

              <p>
                My technical expertise includes
                React.js, JavaScript, Node.js,
                Supabase, MySQL, and modern
                responsive web technologies.
              </p>

              <p>
                Through Hady Tech Solutions, I
                develop professional websites,
                online stores, mobile applications,
                and custom business management
                software for businesses and
                entrepreneurs.
              </p>

              <p>
                I am based in Pakistan and available
                for freelance projects, remote
                collaborations, and international
                development opportunities.
              </p>

              <a
                href={LINKEDIN}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with Hady Yousaf on LinkedIn ↗
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

        {/* SERVICES SECTION */}

        <section
          id="services"
          className="section services-section"
        >
          <div className="section-heading center reveal">
            <span className="eyebrow">
              WHAT I OFFER
            </span>

            <h2>
              Web, App &amp; <span>AI Services</span>
            </h2>

            <p>
              Hady Tech Solutions offers website
              development, e-commerce solutions,
              Android applications, and AI-powered
              business automation services.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article
                className="service-card reveal"
                key={service.title}
              >
                <div
                  className="service-icon"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}

        <section
          id="projects"
          className="section projects-section"
        >
          <div className="section-heading center reveal">
            <span className="eyebrow">
              SELECTED WORK
            </span>

            <h2>
              Hady Tech Solutions <span>Projects</span>
            </h2>

            <p>
              Explore website development,
              e-commerce applications, Android
              apps, and custom business software
              projects by Hady Yousaf.
            </p>
          </div>

          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                aria-pressed={activeFilter === filter}
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
                        setSelectedImage({
                          src: project.images[0],
                          alt: project.imageAlts[0],
                        })
                      }
                      aria-label={`View ${project.title}`}
                    >
                      <img
                        src={project.images[0]}
                        alt={project.imageAlts[0]}
                        loading="lazy"
                        decoding="async"
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
                              setSelectedImage({
                                src: image,
                                alt:
                                  project.imageAlts[index],
                              })
                            }
                            aria-label={`Open ${project.title} screenshot ${
                              index + 1
                            }`}
                          >
                            <img
                              src={image}
                              alt={
                                project.imageAlts[index]
                              }
                              loading="lazy"
                              decoding="async"
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

        {/* SKILLS SECTION */}

        <section
          id="skills"
          className="section skills-section"
        >
          <div className="section-heading center reveal">
            <span className="eyebrow">
              MY TOOLKIT
            </span>

            <h2>
              Development Technologies &amp;{" "}
              <span>Skills</span>
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

        {/* CONTACT SECTION */}

        <section
          id="contact"
          className="section contact-section"
        >
          <div className="contact-panel reveal">
            <span className="eyebrow">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Contact <span>Hady Tech Solutions.</span>
            </h2>

            <p>
              Looking for a web developer,
              e-commerce website developer,
              Android app developer, or AI
              automation solution? Contact Hady
              Tech Solutions to discuss your
              project requirements.
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

      {/* FOOTER */}

      <footer className="footer">
        <a
          href="#home"
          className="footer-logo"
          aria-label="Hady Tech Solutions"
        >
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

      {/* PROJECT IMAGE MODAL */}

      {selectedImage && (
        <div
          className="image-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Project image gallery"
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
            src={selectedImage.src}
            alt={selectedImage.alt}
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