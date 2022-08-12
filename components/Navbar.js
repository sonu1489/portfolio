import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link, animateScroll as scroll } from "react-scroll";
import useDarkMode from "./Dark";

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
      <motion.div 
      variants={fadeIn("down")} initial="initial" animate="animate" 
      className="p-8">
        <div className="flex justify-between light-600">
          <div className="flex text-slate-300 hover:text-orange-200">
            <img src="/profile.jpg" className="w-10 h-10 mr-6 rounded-full"/>
            <h1>Sonu Sharma</h1>
          </div>
          <div className="text-slate-300 nav ">
            <Link  activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="mr-9"
                > Home
                  {/* <a href="" className="mr-9 ">Home</a> */}
            </Link>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="mr-9"
              >About
                 {/* <a href="" className="mr-9 ">About</a> */}
              </Link>
            
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="mr-9"
              >
                Project
              {/* <a href="" className="mr-9 ">Project</a> */}
              </Link>
              {colorTheme === "light" ? (
  <svg
    onClick={() => setTheme("light")}
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
) : (
  <svg
    onClick={() => setTheme("dark")}
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
)}
           
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
