import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profilePictureLarge from "../assets/images/hero-page.png";
import profilePictureSmall from "../assets/images/hero-page1.png";
import cvFile from "../assets/prtfldxnn.pdf";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const imageRef = useRef(null);
  const greetRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Greeting animation
      gsap.fromTo(
        greetRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );

      // Name text reveal
      gsap.fromTo(
        nameRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.35 }
      );

      // Role text
      gsap.fromTo(
        roleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.6 }
      );

      // Hero image reveal
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.04, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
        );
      }

      // CTA buttons reveal
      gsap.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.8 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        padding: "110px 0 0",
        background: "var(--color-bg)",
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "650px",
          height: "350px",
          background: "radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(90px)",
        }}
      />

      {/* Top Text Content Container */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          padding: "0 clamp(20px, 4vw, 40px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          zIndex: 10,
          marginBottom: "20px",
          marginTop: "30px",
        }}
      >
        {/* - Hello */}
        <div
          ref={greetRef}
          style={{
            opacity: 0,
            marginBottom: "12px",
            fontSize: "1rem",
            color: "var(--color-text-secondary)",
            letterSpacing: "0.05em",
            fontFamily: "var(--font-heading)",
          }}
        >
          — Hello
        </div>

        {/* I'm Dani Saputra (Using var(--font-heading) 'Syne' font from Loading.jsx) */}
        <h1
          ref={nameRef}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--color-text-primary)",
            marginBottom: "14px",
            whiteSpace: "nowrap",
            opacity: 0,
          }}
        >
          I'm <span style={{ color: "#2563eb", fontWeight: 700 }}>Dani Saputra</span>
        </h1>

        {/* WEB PROGRAMMER */}
        <div
          ref={roleRef}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(0.95rem, 2vw, 1.3rem)",
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "var(--color-text-secondary)",
            textTransform: "uppercase",
            opacity: 0,
          }}
        >
          SOFTWARE ENGINEER
        </div>
      </div>

      {/* DIRECT FULL WIDTH PHOTO (NO WRAPPING / NO BOX CONTAINER) */}
      <div
        style={{
          width: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          marginTop: "auto",
        }}
      >
        {/* Direct Full-Width Picture Tag */}
        <picture style={{ width: "100%", display: "block" }}>
          <source media="(max-width: 768px)" srcSet={profilePictureSmall} />
          <img
            ref={imageRef}
            src={profilePictureLarge}
            alt="Dani Saputra — Web Programmer"
            loading="lazy"
            decoding="async"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "460px",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
              opacity: 0,
            }}
          />
        </picture>

        {/* CTA Buttons Floating Directly Over Bottom of Image */}
        <div
          ref={ctaRef}
          style={{
            position: "absolute",
            bottom: "24px",
            zIndex: 10,
            display: "flex",
            gap: "10px",
            padding: "6px",
            background: "rgba(7, 9, 14, 0.85)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "8px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            opacity: 0,
          }}
        >
          <a
            href="#projects"
            className="btn-primary"
            data-cursor-hover
            style={{
              borderRadius: "4px",
              padding: "8px 24px",
              fontSize: "0.82rem",
              fontWeight: 600,
              background: "#2563eb",
            }}
          >
            <span>Portfolio</span>
          </a>
          <a
            href={cvFile}
            download
            className="btn-glass"
            data-cursor-hover
            style={{
              borderRadius: "4px",
              padding: "8px 24px",
              fontSize: "0.82rem",
              fontWeight: 600,
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
