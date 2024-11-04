// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-white">
      <div className="grid sm:grid-cols-2 items-start max-w-6xl gap-14 p-8 py-16 mx-auto bg-white rounded-0 shadow-lg">
        {/* Left Section with Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Initial state
          whileInView={{ opacity: 1, x: 0 }} // State when in view
          transition={{ duration: 0.5 }} // Animation duration
          viewport={{ once: false }} // Re-animates when scrolling back
        >
          <h1 className="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
          <p className="text-sm text-gray-500 mt-4">
            Have some big idea or brand to develop and need help? Then reach out, we’d love to hear about your project and provide help.
          </p>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="#007bff" viewBox="0 0 479.058 479.058">
                    <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                  </svg>
                </div>
                <a href="mailto:info@example.com" className="text-[#007bff] text-sm ml-4">
                  <small className="block">Mail</small>
                  <strong>muhammadyunus206@gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right Section with Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Initial state
          whileInView={{ opacity: 1, x: 0 }} // State when in view
          transition={{ duration: 0.5 }} // Animation duration
          viewport={{ once: false }} // Re-animates when scrolling back
        >
          <h2 className="text-gray-800 text-2xl font-bold">Contact Form</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full p-2 border-2 border-black bg-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full p-2 border-2 border-black bg-white"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-1 block w-full p-2 border-2 border-black bg-white"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="mt-1 block w-full p-2 border-2 border-black bg-white"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
