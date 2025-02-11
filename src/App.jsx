import "./App.css";
import "./styles/tailwind.css";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading"; // Komponen Loading
import Heading from "./components/Heading";

const Header = lazy(() => import("./components/Header"));
const About = lazy(() => import("./components/AboutMe"));
const Carousel = lazy(() => import("./components/Carousel"));
const Projects = lazy(() => import("./components/Projects"));
const ProjectList = lazy(() => import("./components/ProjectList"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Blank = lazy(() => import("./components/blankscreen"));

const App = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Timer selama 5 detik sebelum loading hilang
    const timer = setTimeout(() => setShowLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showLoading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <div className="overflow-hidden">
                  <Header />
                  <About />
                  <Carousel />
                  <Projects />
                  <ProjectList />
                  <Contact />
                  <Blank />
                  <Footer />
                </div>
              }
            />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route
              path="/about"
              element={
                <div>
                  <Heading />
                  <About />
                  <Contact />
                </div>
              }
            />
            <Route path="/project" element={
                <div>
                  <Heading />
                  <ProjectList />
                </div>
              } 
            />
            <Route path="/skills" element={
                <div>
                  <Heading />
                  <Projects />
                </div>
              }  
            />
          </Routes>
        </Suspense>
      )}
    </Router>
  );
};

export default App;
