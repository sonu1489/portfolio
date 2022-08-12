import React from "react";

const Project = ({id}) => {
  return (
    <div className="mt-24" id={id}>
      <div className="flex flex-col items-center ">
        <div className="light-700 text-3xl tracking-wider mb-4 ">
          <h1 className="pb-2">PROJECTS</h1>
          <div className="w-8 border-b-4 border-amber-700 ml-16 "></div>
        </div>
        <p className="text-xl leading-8 text-gray-500 mt-4 ml-52 mr-52 mb-16 text-center">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>

      <div>
        <div className="flex justify-around mb-24">
          <div className="container ">
          <img
              src="/video/batch.jpg"
             
              className=" w-full video rounded-lg  object-cover drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
            />
            <div className="middle ">
              <div className="text">SONU SHARMA</div>
            </div>
          </div>

          <div
            className="flex flex-col items-start w-96
        "
          >
            <h1 className="light-700 text-3xl mb-4">World Rank</h1>
            <p className="text-gray-500 text-lg">
              Yubter is a platform that I created where people can join the
              community of their favorite youtube channels and can be part of
              the conversation.
            </p>
            <div className="w-48 text-center font-semibold tracking-wider mt-8"> <a href="#" class="btn btn-sm animated-button thar-two">CASE STUDY</a> </div>
          </div>
        </div>
        <div className="flex justify-around mb-24">
          <div className="container ">
          <img
              src="/video/batch.jpg"
             
              className=" w-full video rounded-lg  object-cover drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
            />
            <div className="middle ">
              <div className="text">SONU SHARMA</div>
            </div>
          </div>
          <div
            className="flex flex-col items-start w-96
        "
          >
            <h1 className="light-700 text-3xl mb-4">World Rank</h1>
            <p className="text-gray-500 text-lg">
              Yubter is a platform that I created where people can join the
              community of their favorite youtube channels and can be part of
              the conversation.
            </p>
            
            <div class="w-48 mt-8 font-semibold  tracking-wider text-center"> <a href="#" class="btn btn-sm animated-button thar-one">CASE STUDY</a> </div>
          </div>
        </div>
        <div className="flex justify-around mb-24">
          <div className="container ">
          <img
              src="/video/batch.jpg"
             
              className=" w-full video rounded-lg  object-cover drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
            />
            <div className="middle ">
              <div className="text">SONU SHARMA</div>
            </div>
          </div>

          <div
            className="flex flex-col items-start w-96
        "
          >
            <h1 className="light-700 text-3xl mb-4">World Rank</h1>
            <p className="text-gray-500 text-lg">
              Yubter is a platform that I created where people can join the
              community of their favorite youtube channels and can be part of
              the conversation.
            </p>
            <div className="w-48 font-semibold  text-center tracking-wider mt-8  "> <a href="#" class="btn btn-sm animated-button thar-three">CASE STUDY</a> </div>
          </div>
        </div>
        <div className="flex justify-around mb-24">
          <div className="container ">
            <img
              src="/video/batch.jpg "
             
              className=" w-full video rounded-lg  object-cover drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
            />
            <div className="middle ">
              <div className="text">SONU SHARMA</div>
            </div>
          </div>

          <div
            className="flex flex-col items-start w-96
        "
          >
            <h1 className="light-700 text-3xl mb-4">World Rank</h1>
            <p className="text-gray-500 text-lg">
              Yubter is a platform that I created where people can join the
              community of their favorite youtube channels and can be part of
              the conversation.
            </p>
            {/* <button className="w-48 bg-amber-400 hover:text-white  font-semibold tracking-wider  py-4 rounded-lg mt-8 ">
              CASE STUDY
            </button> */}
            <div class="w-48 font-semibold text-center tracking-wider  mt-8 "> <a href="#" class="btn btn-sm animated-button thar-four">  CASE STUDY</a> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
