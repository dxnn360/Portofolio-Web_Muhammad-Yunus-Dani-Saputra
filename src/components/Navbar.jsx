import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-white px-10 w-full sticky top-0 z-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-blue-900 rounded-0 z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-black text-xl">dxnn.</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-blue-900">Home</a>
          </li>
          <li>
            <a className="text-black">About</a>
          </li>
          <li>
            <a className="text-black">Projects</a>
          </li>
          <li>
            <a className="text-black">Skills</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="py-[5px] px-[12px] rounded-0 btn-primary bg-blue-900 text-white font-bold">
          Contact Me!
        </a>
      </div>
    </div>
  );
};

export default Navbar;
