import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Loading = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Counter animation
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Text entrance animation
  useEffect(() => {
    const letters = textRef.current?.querySelectorAll(".letter");
    if (!letters) return;

    gsap.fromTo(
      letters,
      { y: 80, opacity: 0, rotateX: -90 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.2,
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.8 }
    );
  }, []);

  // Exit animation when count reaches 100
  useEffect(() => {
    if (count < 100) return;

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl.to(counterRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
    })
      .to(
        textRef.current,
        {
          opacity: 0,
          y: -40,
          duration: 0.4,
          ease: "power2.in",
        },
        "-=0.2"
      )
      .to(
        subtitleRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        },
        "-=0.3"
      )
      .to(containerRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.8,
        ease: "power3.inOut",
      });
  }, [count, onComplete]);

  const logoText = "DXNN";

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "var(--color-bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100000,
        clipPath: "inset(0 0 0% 0)",
      }}
    >
      {/* Logo text */}
      <div
        ref={textRef}
        style={{
          display: "flex",
          gap: "4px",
          perspective: "600px",
          marginBottom: "16px",
        }}
      >
        {logoText.split("").map((char, i) => (
          <span
            key={i}
            className="letter"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              display: "inline-block",
              letterSpacing: "0.05em",
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.8rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--color-text-muted)",
          opacity: 0,
        }}
      >
        Crafting digital experiences
      </p>

      {/* Counter */}
      <div
        ref={counterRef}
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          display: "flex",
          alignItems: "baseline",
          gap: "4px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {count}
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            color: "var(--color-text-muted)",
          }}
        >
          %
        </span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "2px",
          background: "var(--color-surface)",
        }}
      >
        <div
          ref={progressRef}
          style={{
            height: "100%",
            width: `${count}%`,
            background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-secondary))",
            transition: "width 0.15s ease-out",
          }}
        />
      </div>
    </div>
  );
};

export default Loading;