import React from "react";
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
import { motion } from "framer-motion";

const projectList = [
  {
    title: "Kapays - Payment System",
    description: [
      `Kapays is a web-based payment system designed to simplify the monthly trash payment process in Karangsalam Kidul. Before Kapays, residents and administrators faced inefficiencies, delayed payments, and disputes due to manual processes.`,
      `Built using Laravel, Kapays integrates a secure payment gateway, automated reminders, and a user-friendly dashboard for seamless payment management. It ensures real-time record tracking, helping administrators and residents avoid the hassles of manual systems.`,
      `Kapays bridges the gap in essential community services by promoting transparency, reducing administrative burdens, and enhancing the overall payment experience.`,
    ],
    image: slide1,
    stack: [<FaLaravel />, <FaPhp />, <FaHtml5 />, <FaCss3Alt />, <FaJs />],
  },
  {
    title: "Aglostock - Warehouse Website",
    description: [
      `Aglostock is a warehouse management system tailored for businesses seeking efficient inventory control. Manual systems often led to errors, stockouts, and lost opportunities.`,
      `Developed using the MERN stack (MongoDB, Express.js, React, Node.js), Aglostock features real-time stock tracking, low inventory alerts, and analytics. Its intuitive design ensures accessibility for non-technical users.`,
      `By streamlining operations, Aglostock empowers businesses to make informed decisions, adapt to market demands, and enhance overall productivity.`,
    ],
    image: slide2,
    stack: [
      <FaReact />,
      <FaNodeJs />,
      <SiMongodb />,
      <FaHtml5 />,
      <FaCss3Alt />,
      <FaJs />,
    ],
  },
  {
    title: "Daur",
    description: [
      "Daur simplifies the process of responsible waste disposal. Users can effortlessly throw away their recyclables.",
      "The app provides a convenient and eco-friendly solution for getting rid of waste. It features a user-friendly interface that guides users on how to properly sort and dispose of their recyclables.",
      "With Daur, users can track their recycling efforts, learn about sustainable practices, and contribute to a cleaner environment in their community."
    ],
    image: slide3,
    stack: [<SiFigma />],
  },
  {
    title: "Montego - E-Commerce Website",
    description: [
      `Montego is an e-commerce management system built for small businesses. Many faced difficulties with inventory tracking, order processing, and customer engagement due to fragmented tools.`,
      `Using PHP, Montego simplifies operations with features like product management, order tracking, and reporting. Its focus on reliability and ease of use ensures accessibility for business owners.`,
      `Montego helps businesses scale effectively by optimizing daily workflows and enhancing customer satisfaction.`,
    ],
    image: slide4,
    stack: [<FaPhp />, <FaHtml5 />, <FaCss3Alt />, <FaJs />],
  },
  {
    title: "Water-Pumping Record Website",
    description: [
      `This website addresses inefficiencies in logging water production activities. Manual methods led to data inaccuracies, delays, and unreliable reporting.`,
      `Using Laravel, the system centralizes data logging, enabling operators to track production metrics and generate detailed reports. Its user-friendly design ensures accessibility for all users.`,
      `By automating record-keeping, this system promotes accurate data management and supports better decision-making in water production operations.`,
    ],
    image: slide5,
    stack: [<FaLaravel />, <FaPhp />, <FaHtml5 />, <FaCss3Alt />, <FaJs />],
  },
  {
    title: "Grounder - Car Dealers Website",
    description: [
      `Grounder is a dedicated platform for car dealerships, addressing the challenges of managing inventory, customer inquiries, and sales tracking.`,
      `Grounder offers intuitive inventory management, responsive design, and real-time analytics. Dealers can showcase cars effectively while providing an optimized browsing experience for potential buyers.`,
      `The platform bridges the gap between customer needs and dealership operations, ensuring a seamless car-buying journey.`,
    ],
    image: slide6,
    stack: [<SiFigma />],
  },
  {
    title: "Volvo Indonesia - Landing Page Remade",
    description: [
      `This project is a remade landing page for Volvo Indonesia, designed to enhance their digital presence and align with modern web standards.`,
      `The new design emphasizes responsive layouts, fast loading times, and an intuitive user interface. It integrates striking visuals and streamlined navigation to improve user engagement.`,
      `This remade landing page exemplifies how modern web design can amplify brand identity while delivering a superior online experience.`,
    ],
    image: slide7,
    stack: [<FaReact />, <FaHtml5 />, <FaCss3Alt />, <FaJs />],
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectList[id];

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <motion.div
      className="bg-white min-h-screen flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row">
        <motion.div
          className="flex-1 w-full overflow-hidden"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full md:h-screen object-cover"
          />
        </motion.div>

        <div className="flex-1 mt-8 sm:mt-0">
          <div className="max-w-4xl w-full p-16">
            <motion.button
              onClick={() => navigate(-1)}
              className="text-black mb-6 hover:underline hover:text-blue-500"
              whileHover={{ scale: 1.1 }}
            >
              &larr; Back to Projects
            </motion.button>
            <motion.h1
              className="text-4xl text-black font-bold mb-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {project.title}
            </motion.h1>

            <div className="text-gray-500 text-justify text-lg space-y-4 mt-8">
              {project.description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="mt-6 flex items-center space-x-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 text-lg font-semibold">Technologies:</p>
              <div className="flex flex-wrap space-x-2 text-xl">
                {project.stack.map((icon, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-gray-700"
                  >
                    {icon}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;