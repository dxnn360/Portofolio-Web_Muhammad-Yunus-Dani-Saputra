import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import slide1 from "../assets/images/project/kapays.png";
import slide2 from "../assets/images/project/aglo.png";
import slide3 from "../assets/images/project/daur.png";
import slide4 from "../assets/images/project/montego.png";
import slide5 from "../assets/images/project/pdam.png";
import slide6 from "../assets/images/project/grounder.png";
import slide7 from "../assets/images/project/volvo.png";

gsap.registerPlugin(ScrollTrigger);

const projectList = [
  {
    title: "Kapays",
    subtitle: "Payment System",
    description:
      "Helping the people of Karangsalam Kidul manage their monthly trash payments with ease.",
    image: slide1,
  },
  {
    title: "Aglostock",
    subtitle: "Warehouse Management",
    description:
      "Keeping stock management simple and efficient, with insightful dashboards.",
    image: slide2,
  },
  {
    title: "Daur",
    subtitle: "Recycling App",
    description:
      "Simplifying responsible waste disposal with a convenient eco-friendly solution.",
    image: slide3,
  },
  {
    title: "Montego",
    subtitle: "E-Commerce Platform",
    description:
      "Making online shopping management a breeze with products, orders, and analytics.",
    image: slide4,
  },
  {
    title: "PDAM Records",
    subtitle: "Water Pumping System",
    description:
      "Addressing inefficiencies in logging water production with a centralized system.",
    image: slide5,
  },
  {
    title: "Grounder",
    subtitle: "Car Dealers Website",
    description:
      "A dedicated platform for car dealerships to manage inventory and sales.",
    image: slide6,
  },
  {
    title: "Volvo Indonesia",
    subtitle: "Landing Page Remake",
    description:
      "A remade landing page designed to enhance digital presence with modern web standards.",
    image: slide7,
  },
];

const ProjectGallery = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current?.querySelectorAll(".proj-title-reveal"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Project items
      const items = itemsRef.current?.querySelectorAll(".project-item");
      if (items) {
        items.forEach((item) => {
          const img = item.querySelector(".project-image-wrapper");
          const text = item.querySelectorAll(".proj-text-reveal");

          gsap.fromTo(
            img,
            { clipPath: "inset(0 100% 0 0)", opacity: 0 },
            {
              clipPath: "inset(0 0% 0 0)",
              opacity: 1,
              duration: 1,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );

          gsap.fromTo(
            text,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: item,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      id="projects"
      style={{
        background: "var(--color-bg)",
        position: "relative",
      }}
    >
      <div className="section-container">
        {/* Title */}
        <div ref={titleRef} style={{ marginBottom: "80px" }}>
          <span className="section-label proj-title-reveal">Portfolio</span>
          <h2 className="heading-lg proj-title-reveal">
            Selected <span className="text-gradient">works</span>
          </h2>
        </div>

        {/* Project List */}
        <div
          ref={itemsRef}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "80px",
          }}
        >
          {projectList.map((project, index) => (
            <div
              key={index}
              className="project-item"
              data-cursor-hover
              onClick={() => navigate(`/project/${index}`)}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "32px",
                cursor: "pointer",
                padding: "32px 0",
                borderBottom: "1px solid var(--color-border)",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
              }}
            >
              {/* Project number + info */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "24px",
                  flexWrap: "wrap",
                }}
              >
                {/* Number */}
                <span
                  className="proj-text-reveal"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--color-text-muted)",
                    minWidth: "32px",
                    opacity: 0,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Text content */}
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <h3
                    className="proj-text-reveal"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                      fontWeight: 700,
                      color: "var(--color-text-primary)",
                      marginBottom: "4px",
                      opacity: 0,
                    }}
                  >
                    {project.title}
                  </h3>
                  <span
                    className="proj-text-reveal"
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--color-accent)",
                      letterSpacing: "0.04em",
                      display: "block",
                      marginBottom: "12px",
                      opacity: 0,
                    }}
                  >
                    {project.subtitle}
                  </span>
                  <p
                    className="proj-text-reveal"
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      color: "var(--color-text-secondary)",
                      maxWidth: "500px",
                      opacity: 0,
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="proj-text-reveal"
                  style={{
                    alignSelf: "center",
                    opacity: 0,
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-text-muted)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>

              {/* Image */}
              <div
                className="project-image-wrapper"
                style={{
                  width: "100%",
                  height: "clamp(200px, 35vw, 450px)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                  opacity: 0,
                }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.subtitle}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(10,10,15,0.4) 0%, transparent 50%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
