/* eslint-disable*/
import React from "react";
const Project = ({ id }) => {
  return (
    <div className="pt-24  text-th-primary-medium "  id={id}>
      <div className="flex flex-col items-center ">
        <div className="light-700 text-3xl text-th-primary-light tracking-wider mb-4 ">
          <h1 className="pb-2">PROJECTS</h1>
          <div className="w-8 border-b-4 border-th-primary-dark ml-16 "></div>
        </div>
        <p className=" text-lg px-4 sm:text-xl  sm:leading-8  mt-4 w-11/12 lg:w-3/5 mb-16 text-center">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>

      <div>
        <div className="flex-col flex items-center  lg:flex-row lg:ml-0 lg:justify-around py-16 ">
          <div className="container">
            <img
              src="/video/batch.jpg" 
              className="mx-auto video  rounded-lg  object-cover drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
            alt="project"/>
            <div className="middle ">
              <div className="text">SONU SHARMA</div>
            </div>
          </div>

          <div className=" flex-col flex justify-center  md:items-center lg:items-start w-full lg:w-96"
          >
            <h1 className="light-700 text-th-primary-light text-3xl mb-4">World Rank</h1>
            <p className=" text-lg text-center">
              Yubter is a platform that I created where people can join the
              community of their favorite youtube channels and can be part of
              the conversation.
            </p>
            <div className="w-48 text-center  font-semibold tracking-wider mt-8">
              {" "}
              {/* <a href="#" className="btn btn-sm animated-button thar-two"> */}
              <a href="#" className="btn  thar-one rounded-xl btn-sm border-2 text-th-primary-light border-th-primary-dark hover:text-th-background-secondary hover:bg-th-primary-dark animated-button">
                CASE STUDY
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="flex-col flex   lg:flex-row ml-4 lg:ml-0 md:justify-around py-16">
          <div className="container ">
            <img
              src="/video/batch.jpg" 
              className="w-full video rounded-lg  object-cover drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
              alt="project"/>
            <div className="middle ">
              <div className="text">SONU SHARMA</div>
            </div>
          </div>
          <div className="flex flex-col items-start w-full lg:w-96">
            <h1 className="light-700 text-th-primary-light text-3xl mb-4">World Rank</h1>
            <p className=" text-lg">
              Yubter is a platform that I created where people can join the
              community of their favorite youtube channels and can be part of
              the conversation.
            </p>

            <div className="w-48 mt-8 font-semibold  tracking-wider text-center">
              {" "}
              <a href="#" className="btn btn-sm border-2 text-th-primary-light border-th-primary-dark hover:text-th-background-secondary hover:bg-th-primary-dark animated-button thar-one">
                CASE STUDY
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="flex-col flex lg:flex-row ml-4 lg:ml-0 md:justify-around py-16 ">
          <div className="container ">
            <img
              src="/video/batch.jpg" 
              className=" w-full video rounded-lg  object-cover drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
              alt="project" />
            <div className="middle ">
              <div className="text">SONU SHARMA</div>
            </div>
          </div>

          <div
            className="flex flex-col items-start w-full lg:w-96
        "
          >
            <h1 className="light-700 text-th-primary-light text-3xl mb-4">World Rank</h1>
            <p className=" text-lg">
              Yubter is a platform that I created where people can join the
              community of their favorite youtube channels and can be part of
              the conversation.
            </p>
            <div className="w-48 font-semibold  text-center tracking-wider mt-8  ">
              {" "}
              <a href="#" className="btn thar-one btn-sm border-2 text-th-primary-light border-th-primary-dark hover:text-th-background-secondary hover:bg-th-primary-dark animated-button">
                CASE STUDY
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="flex-col flex lg:flex-row ml-4 lg:ml-0 md:justify-around py-16">
          <div className="container ">
            <img
              src="/video/batch.jpg " 
              className=" w-full video rounded-lg  object-cover drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
              alt="project"/>
            <div className="middle ">
              <div className="text">SONU SHARMA</div>
            </div>
          </div>

          <div
            className="flex flex-col items-start w-full lg:w-96
        "
          >
            <h1 className="light-700 text-th-primary-light text-3xl mb-4">World Rank</h1>
            <p className=" text-lg">
              Yubter is a platform that I created where people can join the
              community of their favorite youtube channels and can be part of
              the conversation.
            </p>
            {/* <button className="w-48 bg-amber-400 hover:text-white  font-semibold tracking-wider  py-4 rounded-lg mt-8 ">
              CASE STUDY
            </button> */}
            <div className="w-48 font-semibold text-center tracking-wider  mt-8 ">
              {" "}
              <a href="#" className="btn thar-one btn-sm border-2 text-th-primary-light border-th-primary-dark hover:text-th-background-secondary hover:bg-th-primary-dark animated-button">
                {" "}
                CASE STUDY
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
