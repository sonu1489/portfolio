import React from "react";
// import bgImage from "./video/video.mp4"
import Head from "next/head";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Header = ({ id }) => {
  return (
    <>
      <div id={id}>
        <div className="">
          <video
            src="/video/video-2.mp4"
            autoPlay
            loop
            muted
            className="absolute -z-10 top-0 left-0  object-cover"
          />
          <motion.div
            variants={fadeIn()}
            initial="initial"
            animate="animate"
            className=" flex flex-wrap justify-center text-slate-300 relative  text-center my-16 pb-40"
          >
            <h1 className="light-700 text-6xl  ">
              <span className="text-amber-400">HEY</span> , I'M SONU{" "}
              <span className="">SHARMA</span>
            </h1>
            <h1 className="light-400 w-4/5  mt-8  ">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </h1>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="light-400 w-80 border-2 rounded-full font-bold mt-24 pt-2 pb-2 hover:text-white"
            >
              PROJECTS
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Header;
