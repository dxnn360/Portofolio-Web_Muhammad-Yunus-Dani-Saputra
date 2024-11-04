// src/components/Footer.jsx
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 pt-16 pb-6">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-between text-center lg:text-left">
          <div className="w-full lg:w-4/12 px-4 mb-6 lg:mb-0">
            <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
            <p className="text mt-2 mb-4 text-white">
              Find us on any of these platforms, we respond within 1-2 business days.
            </p>
            <div className="flex justify-center lg:justify-start space-x-2">
              <button className="bg-white shadow-lg h-10 w-10 rounded-full text-blue-900">
                <i className="fab fa-instagram"></i>
              </button>
              <button className="bg-white shadow-lg h-10 w-10 rounded-full text-blue-900">
                <i className="fab fa-facebook-square"></i>
              </button>
              <button className="bg-white shadow-lg h-10 w-10 rounded-full text-pink-400">
                <i className="fab fa-dribbble"></i>
              </button>
              <button className="bg-white shadow-lg h-10 w-10 rounded-full text-blueGray-800">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-4/12 px-4 mb-6 lg:mb-0">
            <div className="flex flex-col items-center lg:items-start">
              <h5 className="text-white text-sm font-semibold mb-2">Contact Me</h5>
              <ul className="text-center lg:text-left">
                <li>
                  <a href="tel:+6281517040930" className="text-blueGray-200 hover:text-white block mb-2">
                    +62 81517040930
                  </a>
                </li>
                <li>
                  <a href="mailto:muhammadyunus206@gmail.com" className="text-blueGray-200 hover:text-white block mb-2">
                    muhammadyunus206@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://github.com/dxnnysaputra" className="text-blueGray-200 hover:text-white block">
                    @dxnnysaputra
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-4/12 px-4">
            <h5 className="text-white text-sm font-semibold mb-2">Get Latest Information</h5>
            <form className="flex items-center justify-center lg:justify-start">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full lg:w-auto bg-white border-2 text-blueGray-800 outline-none focus:ring-2 focus:ring-lightBlue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-300 text-black border-2 font-semibold  hover:bg-lightBlue-600 outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center justify-center lg:justify-between">
          <div className="text-sm text-blueGray-500 font-semibold py-1 text-center">
            © {currentYear}{' '}
            <a
              href="#"
              className="text-blueGray-500 hover:text-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              dxnn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
