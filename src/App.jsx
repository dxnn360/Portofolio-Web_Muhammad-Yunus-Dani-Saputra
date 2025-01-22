import "./App.css";
import "./styles/tailwind.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/AboutMe";
import Blank from "./components/blankscreen";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectList from "./components/ProjectList"; // Updated import
import ProjectDetail from "./components/ProjectDetail"; // Import ProjectDetail

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define Routes */}
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
              <About />
              <Contact />
            </div>
          }
        />
        <Route
          path="/project"
          element={
            <div>
              <ProjectList />
            </div>
          }
        />
        <Route
          path="/skills"
          element={
            <div>
              <Projects />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
