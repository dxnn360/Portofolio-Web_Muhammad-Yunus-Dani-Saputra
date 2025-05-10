import React from "react";
import { useLocation } from "react-router-dom";
import HeadingImages from "../assets/images/heading.png";

const Heading = () => {
  const location = useLocation();

  // Dynamic background and heading based on routes
  const backgrounds = {
    "/": HeadingImages,
    "/about": HeadingImages,
    "/project": HeadingImages,
    "/skills": HeadingImages,
  };

  const headings = {
    "/": "Welcome to Home",
    "/about": "About Me",
    "/project": "Projects",
    "/skills": "Skills",
  };

  const backgroundImage = backgrounds[location.pathname] || null;
  const headingText = headings[location.pathname] || "Page Not Found";

  return (
    <div
      className="w-full h-60 flex justify-center items-center text-white text-4xl font-semibold font-italic bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {headingText}
    </div>
  );
};

export default Heading;
