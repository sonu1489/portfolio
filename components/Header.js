/* eslint-disable*/
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTranslation } from "next-i18next";

const Header = ({ id }) => {
  const {t} = useTranslation()
  return (
    <>
      <div id={id} >
        <div className="relative">
          <video
            src="/video/video-2.mp4"
            autoPlay
            loop
            muted
            className="absolute -z-10 top-0 left-0 w-full h-full  object-cover"
          />
          <motion.div
            variants={fadeIn()}
            initial="initial"
            animate="animate"
            className="flex flex-wrap justify-center text-gray-100  md:py-16  text-center"
          >
            <h1 className=" text-3xl md:text-6xl  ">
              <span className="text-th-primary-dark">{t("HEY")}</span> , I'M SONU{" "}
              <span className="">SHARMA</span>
            </h1>
            <h1 className="text-xl sm:text-2xl sm:leading-relaxed w-4/5  mt-8 sm:mt-16  ">
              {t("A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product")}
            </h1>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className=" text-xl sm:text-3xl w-56 sm:w-80 border-2 rounded-full sm:font-semibold mt-16 sm:mt-24 py-2 sm:py-3 "
            >
              {t("PROJECTS")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Header;
