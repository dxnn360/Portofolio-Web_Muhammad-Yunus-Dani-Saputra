import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaLaravel,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { SiMongodb, SiFigma } from "react-icons/si";
import slide1 from "../assets/images/project/kapays.png";
import slide2 from "../assets/images/project/aglo.png";
import slide3 from "../assets/images/project/daur.png";
import slide4 from "../assets/images/project/montego.png";
import slide5 from "../assets/images/project/pdam.png";
import slide6 from "../assets/images/project/grounder.png";
import slide7 from "../assets/images/project/volvo.png";
import gsap from "gsap";

const projectList = [
  {
    title: "Kapays — Payment System",
    description: [
      "Kapays is a web-based payment system designed to simplify the monthly trash payment process in Karangsalam Kidul. Before Kapays, residents and administrators faced inefficiencies, delayed payments, and disputes due to manual processes.",
      "Built using Laravel, Kapays integrates a secure payment gateway, automated reminders, and a user-friendly dashboard for seamless payment management. It ensures real-time record tracking, helping administrators and residents avoid the hassles of manual systems.",
      "Kapays bridges the gap in essential community services by promoting transparency, reducing administrative burdens, and enhancing the overall payment experience.",
    ],
    image: slide1,
    stack: ["Laravel", "PHP", "HTML5", "CSS3", "JavaScript"],
    stackIcons: [<FaLaravel />, <FaPhp />, <FaHtml5 />, <FaCss3Alt />, <FaJs />],
  },
  {
    title: "Aglostock — Warehouse",
    description: [
      "Aglostock is a warehouse management system tailored for businesses seeking efficient inventory control. Manual systems often led to errors, stockouts, and lost opportunities.",
      "Developed using the MERN stack (MongoDB, Express.js, React, Node.js), Aglostock features real-time stock tracking, low inventory alerts, and analytics. Its intuitive design ensures accessibility for non-technical users.",
      "By streamlining operations, Aglostock empowers businesses to make informed decisions, adapt to market demands, and enhance overall productivity.",
    ],
    image: slide2,
    stack: ["React", "Node.js", "MongoDB", "HTML5", "CSS3", "JavaScript"],
    stackIcons: [<FaReact />, <FaNodeJs />, <SiMongodb />, <FaHtml5 />, <FaCss3Alt />, <FaJs />],
    link: "https://github.com",
  },
  {
    title: "Daur — Recycling",
    description: [
      "Daur simplifies the process of responsible waste disposal. Users can effortlessly throw away their recyclables.",
      "The app provides a convenient and eco-friendly solution for getting rid of waste. It features a user-friendly interface that guides users on how to properly sort and dispose of their recyclables.",
      "With Daur, users can track their recycling efforts, learn about sustainable practices, and contribute to a cleaner environment in their community.",
    ],
    image: slide3,
    stack: ["Figma"],
    stackIcons: [<SiFigma />],
    link: "https://github.com",
  },
  {
    title: "Montego — E-Commerce",
    description: [
      "Montego is an e-commerce management system built for small businesses. Many faced difficulties with inventory tracking, order processing, and customer engagement due to fragmented tools.",
      "Using PHP, Montego simplifies operations with features like product management, order tracking, and reporting. Its focus on reliability and ease of use ensures accessibility for business owners.",
      "Montego helps businesses scale effectively by optimizing daily workflows and enhancing customer satisfaction.",
    ],
    image: slide4,
    stack: ["PHP", "HTML5", "CSS3", "JavaScript"],
    stackIcons: [<FaPhp />, <FaHtml5 />, <FaCss3Alt />, <FaJs />],
    link: "https://github.com",
  },
  {
    title: "Water-Pumping Records",
    description: [
      "This website addresses inefficiencies in logging water production activities. Manual methods led to data inaccuracies, delays, and unreliable reporting.",
      "Using Laravel, the system centralizes data logging, enabling operators to track production metrics and generate detailed reports. Its user-friendly design ensures accessibility for all users.",
      "By automating record-keeping, this system promotes accurate data management and supports better decision-making in water production operations.",
    ],
    image: slide5,
    stack: ["Laravel", "PHP", "HTML5", "CSS3", "JavaScript"],
    stackIcons: [<FaLaravel />, <FaPhp />, <FaHtml5 />, <FaCss3Alt />, <FaJs />],
    link: "https://github.com",
  },
  {
    title: "Grounder — Car Dealers",
    description: [
      "Grounder is a dedicated platform for car dealerships, addressing the challenges of managing inventory, customer inquiries, and sales tracking.",
      "Grounder offers intuitive inventory management, responsive design, and real-time analytics. Dealers can showcase cars effectively while providing an optimized browsing experience for potential buyers.",
      "The platform bridges the gap between customer needs and dealership operations, ensuring a seamless car-buying journey.",
    ],
    image: slide6,
    stack: ["Figma"],
    stackIcons: [<SiFigma />],
    link: "https://github.com",
  },
  {
    title: "Volvo Indonesia — Landing Page",
    description: [
      "This project is a remade landing page for Volvo Indonesia, designed to enhance their digital presence and align with modern web standards.",
      "The new design emphasizes responsive layouts, fast loading times, and an intuitive user interface. It integrates striking visuals and streamlined navigation to improve user engagement.",
      "This remade landing page exemplifies how modern web design can amplify brand identity while delivering a superior online experience.",
    ],
    image: slide7,
    stack: ["React", "HTML5", "CSS3", "JavaScript"],
    stackIcons: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJs />],
    link: "https://github.com",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectList[id];
  const pageRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      // Page entrance
      gsap.fromTo(
        pageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );

      // Image reveal
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: "inset(0 0 100% 0)", scale: 1.05 },
          {
            clipPath: "inset(0 0 0% 0)",
            scale: 1,
            duration: 1,
            ease: "power3.inOut",
            delay: 0.2,
          }
        );
      }

      // Content elements
      const contentEls = contentRef.current?.querySelectorAll(".detail-reveal");
      if (contentEls) {
        gsap.fromTo(
          contentEls,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            delay: 0.4,
          }
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, [id]);

  if (!project) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--color-bg)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1
            className="heading-lg"
            style={{ marginBottom: "16px" }}
          >
            Project not found
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="btn-glass"
            data-cursor-hover
          >
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={pageRef}
      style={{
        minHeight: "100vh",
        background: "var(--color-bg)",
        opacity: 0,
      }}
    >
      {/* Hero Image */}
      <div
        style={{
          width: "100%",
          height: "clamp(300px, 50vh, 600px)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          ref={imageRef}
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, var(--color-bg) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 80px) 100px",
          marginTop: "-60px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="detail-reveal"
          data-cursor-hover
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.85rem",
            color: "var(--color-text-muted)",
            marginBottom: "32px",
            transition: "color 0.3s",
            opacity: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--color-accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--color-text-muted)";
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Projects
        </button>

        {/* Title */}
        <h1
          className="detail-reveal"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--color-text-primary)",
            marginBottom: "40px",
            opacity: 0,
          }}
        >
          {project.title}
        </h1>

        {/* Description paragraphs */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {project.description.map((paragraph, index) => (
            <p
              key={index}
              className="detail-reveal"
              style={{
                fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
                lineHeight: 1.8,
                color: "var(--color-text-secondary)",
                opacity: 0,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tech stack */}
        <div
          className="detail-reveal"
          style={{
            marginBottom: "32px",
            opacity: 0,
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              marginBottom: "16px",
              display: "block",
            }}
          >
            Technologies
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="glass-card"
                style={{
                  padding: "8px 16px",
                  fontSize: "0.8rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--color-text-secondary)",
                  borderRadius: "8px",
                }}
              >
                <span style={{ color: "var(--color-accent)", fontSize: "1rem" }}>
                  {project.stackIcons[i]}
                </span>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary detail-reveal"
            data-cursor-hover
            style={{ opacity: 0 }}
          >
            <span>View Repository</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ position: "relative", zIndex: 1 }}
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;