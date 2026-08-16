import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

const Heading = () => {
  const location = useLocation();
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const breadcrumbRef = useRef(null);

  const headings = {
    "/": "Home",
    "/about": "About Me",
    "/project": "Projects",
    "/skills": "Skills",
  };

  const headingText = headings[location.pathname] || "Page";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal
      const letters = textRef.current?.querySelectorAll(".heading-letter");
      if (letters) {
        gsap.fromTo(
          letters,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.04,
            delay: 0.1,
          }
        );
      }

      // Breadcrumb
      gsap.fromTo(
        breadcrumbRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.5 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--color-bg)",
        position: "relative",
        overflow: "hidden",
        padding: "120px clamp(20px, 5vw, 80px) 60px",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(60px)",
        }}
      />

      {/* Breadcrumb */}
      <div
        ref={breadcrumbRef}
        style={{
          marginBottom: "20px",
          opacity: 0,
        }}
      >
        <span className="section-label" style={{ justifyContent: "center" }}>
          {location.pathname === "/" ? "Home" : `Home / ${headingText}`}
        </span>
      </div>

      {/* Large text */}
      <div
        ref={textRef}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          perspective: "600px",
          overflow: "hidden",
        }}
      >
        {headingText.split("").map((char, i) => (
          <span
            key={i}
            className="heading-letter"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "var(--color-text-primary)",
              display: "inline-block",
              opacity: 0,
              marginRight: char === " " ? "16px" : "0",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Heading;
