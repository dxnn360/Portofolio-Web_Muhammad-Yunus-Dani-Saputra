import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const outlineRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Large outline text parallax
      gsap.fromTo(
        outlineRef.current,
        { x: "-10%" },
        {
          x: "10%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );

      // Section label + title
      gsap.fromTo(
        titleRef.current?.querySelectorAll(".about-reveal"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Paragraphs
      [para1Ref, para2Ref].forEach((ref, i) => {
        gsap.fromTo(
          ref.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Stat cards stagger
      const statCards = statsRef.current?.querySelectorAll(".stat-card");
      if (statCards) {
        gsap.fromTo(
          statCards,
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "7+", label: "Projects Completed" },
    { number: "2+", label: "Years Learning" },
    { number: "3", label: "Internships" },
  ];

  return (
    <section
      ref={sectionRef}
      className="section"
      id="about"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--color-bg)",
      }}
    >
      {/* Large outline text in background */}
      <div
        ref={outlineRef}
        className="text-outline"
        style={{
          position: "absolute",
          top: "50%",
          left: "-5%",
          transform: "translateY(-50%)",
          fontSize: "clamp(6rem, 18vw, 16rem)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          opacity: 0.04,
          userSelect: "none",
        }}
      >
        ABOUT ME
      </div>

      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "60px",
          }}
        >
          {/* Top: title area */}
          <div
            ref={titleRef}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <span className="section-label about-reveal">About</span>
            <h2
              className="heading-lg about-reveal"
              style={{ maxWidth: "600px" }}
            >
              Bridging design{" "}
              <span className="text-gradient">&amp; code</span>
            </h2>
          </div>

          {/* Content grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 450px), 1fr))",
              gap: "40px",
              alignItems: "start",
            }}
          >
            {/* Left: Bio text */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p
                ref={para1Ref}
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                  lineHeight: 1.8,
                  color: "var(--color-text-secondary)",
                  opacity: 0,
                }}
              >
                Hi, I'm Danny, a dedicated web programmer and UI/UX designer from
                Batang, Central Java. My journey in the tech world began in high
                school, where I developed a passion for creating functional and
                aesthetically pleasing digital experiences. With a strong foundation
                in programming and design, I strive to bridge the gap between user
                needs and technical implementation.
              </p>
              <p
                ref={para2Ref}
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                  lineHeight: 1.8,
                  color: "var(--color-text-secondary)",
                  opacity: 0,
                }}
              >
                I'm currently seeking new opportunities to enhance my skills and
                contribute to innovative projects. My goal is to deliver seamless
                user experiences while leveraging the latest web technologies. Let's
                connect and see how I can add value to your team or project!
              </p>
            </div>

            {/* Right: Stats */}
            <div
              ref={statsRef}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="stat-card glass-card"
                  style={{
                    padding: "28px 32px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    opacity: 0,
                  }}
                >
                  <span
                    className="text-gradient"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(2rem, 4vw, 2.8rem)",
                      fontWeight: 800,
                      lineHeight: 1,
                    }}
                  >
                    {stat.number}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text-secondary)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
