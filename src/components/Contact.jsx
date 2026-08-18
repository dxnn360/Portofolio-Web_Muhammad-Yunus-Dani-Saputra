import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const experiences = [
    {
      role: "Programmer",
      company: "RS QIM Batang",
      period: "2025 - Present",
      description:
        "Developing and maintaining healthcare software solutions, web applications, and internal hospital systems to optimize clinical workflows, streamline patient data management, and enhance overall operational efficiency.",
    },
    {
      role: "Internship Web Developer",
      company: "Perumda Tirtayasa",
      period: "2023",
      description:
        "Developed a website for recording water distribution processes, replacing manual methods and simplifying data archiving. Improved efficiency in recording water production results with the newly implemented website.",
    },
    {
      role: "Internship Web Developer",
      company: "Infinite Learning",
      period: "2023",
      description:
        "Developed a web application for recording and tracking crop yields, streamlining agricultural monitoring and reporting. The solution improved data accuracy, reduced manual errors, and enabled better decision-making.",
    },
    {
      role: "Assistant Lecturer",
      company: "Telkom University",
      period: "2024",
      description:
        "Provided support in teaching and guiding students on software-defined networking concepts and hands-on labs, including practical experience with Cisco routers and switches, as well as using GNS3 for network simulations.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo(
        titleRef.current?.querySelectorAll(".exp-title-reveal"),
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

      // Items
      const items = itemsRef.current?.querySelectorAll(".exp-item");
      if (items) {
        gsap.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: itemsRef.current,
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
      id="experience"
      style={{
        background: "var(--color-bg-elevated)",
        position: "relative",
      }}
    >
      <div className="section-divider" style={{ position: "absolute", top: 0, left: 0 }} />

      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* Left: Title */}
          <div ref={titleRef}>
            <span className="section-label exp-title-reveal">Experience</span>
            <h2
              className="heading-lg exp-title-reveal"
              style={{ marginBottom: "16px" }}
            >
              Working <span className="text-gradient">history</span>
            </h2>
            <p
              className="exp-title-reveal"
              style={{
                fontSize: "0.9rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.6,
                opacity: 0,
              }}
            >
              Here's what I've been working on.
            </p>
          </div>

          {/* Right: Accordion */}
          <div
            ref={itemsRef}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="exp-item"
                style={{
                  borderBottom: "1px solid var(--color-border)",
                  opacity: 0,
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  data-cursor-hover
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "28px 0",
                    textAlign: "left",
                    gap: "16px",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(1rem, 2vw, 1.3rem)",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                        marginBottom: "4px",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--color-accent)",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {exp.company} — {exp.period}
                    </span>
                  </div>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: "1px solid var(--color-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s",
                      transform: activeIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-text-secondary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>

                {/* Expandable content */}
                <div
                  style={{
                    maxHeight: activeIndex === index ? "200px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      color: "var(--color-text-secondary)",
                      paddingBottom: "24px",
                    }}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider" style={{ position: "absolute", bottom: 0, left: 0 }} />
    </section>
  );
};

export default Contact;
