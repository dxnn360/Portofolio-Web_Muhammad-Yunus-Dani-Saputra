import "./App.css";
import "./styles/tailwind.css";
import React, { Suspense, lazy, useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import CustomCursor from "./components/CustomCursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const Header = lazy(() => import("./components/Header"));
const About = lazy(() => import("./components/AboutMe"));
const Projects = lazy(() => import("./components/Projects"));
const ProjectList = lazy(() => import("./components/ProjectList"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Heading = lazy(() => import("./components/Heading"));

const DarkFallback = () => (
  <div className="min-h-screen" style={{ background: "#07090e" }} />
);

// Scroll-to-top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<DarkFallback />}>
              <div style={{ background: "#07090e" }}>
                <Header />
                <About />
                <Projects />
                <ProjectList />
                <Contact />
                <Footer />
              </div>
            </Suspense>
          }
        />
        <Route
          path="/project/:id"
          element={
            <Suspense fallback={<DarkFallback />}>
              <ProjectDetail />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<DarkFallback />}>
              <div style={{ background: "#07090e" }}>
                <Heading />
                <About />
                <Contact />
                <Footer />
              </div>
            </Suspense>
          }
        />
        <Route
          path="/project"
          element={
            <Suspense fallback={<DarkFallback />}>
              <div style={{ background: "#07090e" }}>
                <Heading />
                <ProjectList />
                <Footer />
              </div>
            </Suspense>
          }
        />
        <Route
          path="/skills"
          element={
            <Suspense fallback={<DarkFallback />}>
              <div style={{ background: "#07090e" }}>
                <Heading />
                <Projects />
                <Footer />
              </div>
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

const App = () => {
  const [showLoading, setShowLoading] = useState(true);
  const lenisRef = useRef(null);

  // Initialize Lenis smooth scroll after loading
  useEffect(() => {
    if (showLoading) return;

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    let animationFrameId;
    function updateLenis(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(updateLenis);
    }
    animationFrameId = requestAnimationFrame(updateLenis);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [showLoading]);

  return (
    <Router>
      <div style={{ background: "#07090e", minHeight: "100vh", position: "relative" }}>
        {/* Pre-render content in background so there's zero white flash */}
        <CustomCursor />
        <div className="noise-overlay" />
        <AppContent />

        {/* Loading Overlay on Top */}
        {showLoading && <Loading onComplete={() => setShowLoading(false)} />}
      </div>
    </Router>
  );
};

export default App;
