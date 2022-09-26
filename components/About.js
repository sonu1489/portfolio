/* eslint-disable*/
import React from "react";
import { useTranslation } from "next-i18next";

const About = ({ id }) => {
  const { t } = useTranslation()
   return (
    <>
      <div className="" id={id}>
        <div className="flex-col bg-info   flex  sm:flex-row text-center sm:justify-around w-full ">
          <div className="w-11/12 pb-24 sm:mx-0 sm:w-2/4">
            <p className="text-xl leading-8 text-th-primary-medium mt-32  ">
              " {t("Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology")} "
            </p>
            {/* <div className="border-b-4 border-amber-800 w-1/2 ml-28 mt-4"></div> */}
            <div className="border-b-4 border-th-primary-dark w-1/2 ml-28 mt-4"></div>
          </div>
          <div>
            <button className="text-lg  rounded-lg mt-8 sm:mt-32 border-2 border-th-primary-dark text-th-background-secondary bg-th-primary-dark px-8  py-4 font-light ">
              {t("ABOUT ME")}
            </button>
          </div>
        </div>

        <div className=" relative    drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]  ">
        {/* <img src="/video/know.jpg"  className="absolute -z-10 w-full h-full" alt="know-me"/> */}
          <h1 className=" ml-10 text-th-primary-light light-700 text-3xl py-10">
            <span className="border-l-4 border-th-primary-dark mr-4"></span>
            {t("Get to know me!")}
          </h1>
          
          <div className="sm:mr-24 w-3/4 text-th-primary-medium   sm:w-2/4 ml-auto  ">
          <p className="pb-4  leading-7  tracking-wide text-lg">
            {t("I'm a")}{" "}
            <span className=" text-th-primary-dark font-bold">
             {t(" Frontend Web Developer")}
            </span>{" "}
            {t("building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the")} <span className=" text-th-primary-dark font-bold">{t("Projects")}</span> {t("section.")}
          </p>
          <p className="pb-4 leading-7  tracking-wide text-lg">
          {t("I also like sharing content related to the stuff that I have learned over the years in")}{" "}
            <span className=" text-th-primary-dark font-bold"> {t("Web Development")}</span> {t("so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming")}
          </p>
          <p className="pb-8 leading-7  tracking-wide text-lg">
            {t("I'm open to")} <span className=" text-th-primary-dark font-bold"> {t("Job")}</span>{" "}
           {t(" opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to ")}<span className="text-th-primary-dark  font-bold"> {t("contact")}</span>{" "}
            {t("me.")}
          </p>
          </div>
      
        </div>
      </div>
    </>
  );
};

export default About;
