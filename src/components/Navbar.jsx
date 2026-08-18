import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const location = useLocation();

  // Auto-hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);
      if (currentY > lastScrollY.current && currentY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Animate mobile/tablet menu
  useEffect(() => {
    if (!menuRef.current) return;
    const links = menuRef.current.querySelectorAll(".mobile-link");

    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(menuRef.current, {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.5,
        ease: "power3.inOut",
      });
      gsap.fromTo(
        links,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.2,
        }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(menuRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.4,
        ease: "power3.inOut",
      });
    }
  }, [isOpen]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/project", label: "Projects" },
    { path: "/skills", label: "Skills" },
  ];

  return (
    <>
      {/* Minimalist Header without rounded pill wrapper */}
      <header
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          width: "100%",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(20px, 5vw, 60px)",
          background: scrolled ? "rgba(7, 9, 14, 0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid transparent",
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s, border 0.3s",
        }}
      >
        {/* Brand Logo */}
        <NavLink
          to="/"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.35rem",
            fontWeight: 800,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.03em",
          }}
          data-cursor-hover
        >
          dxnn<span style={{ color: "var(--color-accent)" }}>.</span>
        </NavLink>

        {/* Desktop Links — Visible ONLY on Desktop (>=1024px) */}
        <nav className="nav-desktop-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              data-cursor-hover
              style={({ isActive }) => ({
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: isActive ? 600 : 400,
                color: isActive
                  ? "var(--color-text-primary)"
                  : "var(--color-text-secondary)",
                letterSpacing: "0.04em",
                position: "relative",
                paddingBottom: "4px",
                transition: "color 0.3s",
              })}
              className="desktop-nav-link"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA — Visible ONLY on Desktop (>=1024px) */}
        <a
          href="mailto:muhammadyunus206@gmail.com"
          className="btn-primary nav-desktop-cta"
          data-cursor-hover
          style={{
            padding: "9px 24px",
            fontSize: "0.8rem",
          }}
        >
          <span>Contact</span>
        </a>

        {/* Hamburger Toggle Button — Visible ONLY on Mobile & Tablet (<1024px, sm & md) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="nav-hamburger-btn"
          data-cursor-hover
          aria-label="Toggle menu"
        >
          <span
            style={{
              width: "18px",
              height: "2px",
              background: "var(--color-text-primary)",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transform: isOpen ? "rotate(45deg) translateY(1.5px)" : "none",
            }}
          />
          <span
            style={{
              width: "12px",
              height: "2px",
              background: "var(--color-text-primary)",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              opacity: isOpen ? 0 : 1,
              marginLeft: "auto",
              marginRight: "4px",
            }}
          />
          <span
            style={{
              width: "18px",
              height: "2px",
              background: "var(--color-text-primary)",
              borderRadius: "2px",
              transition: "all 0.3s ease",
              transform: isOpen ? "rotate(-45deg) translateY(-1.5px)" : "none",
            }}
          />
        </button>
      </header>

      {/* Mobile/Tablet Fullscreen Menu Overlay */}
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "rgba(7, 9, 14, 0.97)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "28px",
          clipPath: "inset(0 0 100% 0)",
        }}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className="mobile-link"
            data-cursor-hover
            onClick={() => setIsOpen(false)}
            style={({ isActive }) => ({
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 6vw, 3rem)",
              fontWeight: 700,
              color: isActive
                ? "var(--color-accent)"
                : "var(--color-text-primary)",
              opacity: 0,
              transition: "color 0.3s",
            })}
          >
            {link.label}
          </NavLink>
        ))}
        <a
          href="mailto:muhammadyunus206@gmail.com"
          className="mobile-link btn-primary"
          data-cursor-hover
          onClick={() => setIsOpen(false)}
          style={{ opacity: 0, marginTop: "16px" }}
        >
          <span>Contact</span>
        </a>
      </div>

      {/* Explicit Breakpoint Styles for Navbar */}
      <style>{`
        /* Desktop view (>= 1024px) */
        @media (min-width: 1024px) {
          .nav-desktop-links {
            display: flex !important;
            align-items: center;
            gap: 36px;
          }
          .nav-desktop-cta {
            display: inline-flex !important;
          }
          .nav-hamburger-btn {
            display: none !important;
          }
        }

        /* Mobile & Tablet view (< 1024px, sm and md) */
        @media (max-width: 1023px) {
          .nav-desktop-links {
            display: none !important;
          }
          .nav-desktop-cta {
            display: none !important;
          }
          .nav-hamburger-btn {
            display: flex !important;
            flex-direction: column;
            gap: ${isOpen ? "0px" : "5px"};
            width: 38px;
            height: 38px;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            justify-content: center;
            align-items: center;
          }
        }

        .desktop-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--color-accent);
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .desktop-nav-link:hover::after {
          width: 100%;
        }
        .desktop-nav-link:hover {
          color: var(--color-text-primary) !important;
        }
      `}</style>
    </>
  );
};

export default Navbar;
