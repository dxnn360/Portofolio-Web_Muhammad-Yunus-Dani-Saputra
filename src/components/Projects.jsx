import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Fullstack Development",
    description:
      "Building responsive and modern web applications using React, Laravel, Vue, Node.js, and more.",
    tags: ["React", "Laravel", "Node.js", "Vue"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and enhancing user experience through thoughtful, human-centered design.",
    tags: ["Figma", "Prototyping", "User Research"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Project Management",
    description:
      "Managing projects using agile methodologies to ensure timely delivery and high-quality outcomes.",
    tags: ["Scrum", "Agile", "Jira"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Tech Proficiency",
    description:
      "Knowledgeable in Git, API integrations, Cybersecurity, cloud services, and DevOps.",
    tags: ["Git", "APIs", "Cloud", "Security"],
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo(
        titleRef.current?.querySelectorAll(".skill-title-reveal"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards stagger
      const cards = cardsRef.current?.querySelectorAll(".skill-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      id="skills"
      style={{
        background: "var(--color-bg-elevated)",
        position: "relative",
      }}
    >
      {/* Section divider top */}
      <div className="section-divider" style={{ position: "absolute", top: 0, left: 0 }} />

      <div className="section-container">
        {/* Title */}
        <div ref={titleRef} style={{ marginBottom: "60px" }}>
          <span className="section-label skill-title-reveal">Services</span>
          <h2 className="heading-lg skill-title-reveal">
            What can I <span className="text-gradient">do?</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "20px",
          }}
        >
          {skillsData.map((skill, i) => (
            <div
              key={i}
              className="skill-card glass-card"
              data-cursor-hover
              style={{
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                opacity: 0,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: "var(--color-accent-glow)",
                  border: "1px solid rgba(168, 85, 247, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-accent)",
                }}
              >
                {skill.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                }}
              >
                {skill.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "var(--color-text-secondary)",
                }}
              >
                {skill.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
                {skill.tags.map((tag, j) => (
                  <span
                    key={j}
                    style={{
                      fontSize: "0.7rem",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      background: "var(--color-glass)",
                      border: "1px solid var(--color-glass-border)",
                      color: "var(--color-text-muted)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section divider bottom */}
      <div className="section-divider" style={{ position: "absolute", bottom: 0, left: 0 }} />
    </section>
  );
};

export default Projects;
