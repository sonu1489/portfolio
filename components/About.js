import React from "react";

const About = ({ id }) => {
  return (
    <>
      {/* <div className="bg-gradient-to-b from-white to-slate-100" id={id}>
      <div className="mt-60 text-center w-full px-40">
        <div className="flex flex-col items-center">
          <h1 className="light-700 text-3xl mb-2 tracking-widest ">ABOUT ME</h1>
          <div className="w-8 border-b-4 border-amber-700 align-center "></div>
        </div>
        <p className="text-xl leading-8 text-gray-500 mt-8">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      <div className="mt-24 flex ">
        <div className="w-2/4 pl-12"> 
          <h1 className=" light-700 text-3xl mb-6">Get to know me!</h1>
          <p className="pb-4 leading-7 text-gray-500 tracking-wide text-base">
            I'm a{" "}
            <span className="text-black  font-bold">
              Frontend Web Developer
            </span>{" "}
            building the Front-end of Websites and Web Applications that leads
            to the success of the overall product. Check out some of my work in
            the <span className="text-black  font-bold">Projects</span> section.
          </p>
          <p className="pb-4 leading-7 text-gray-500 tracking-wide text-base">
            I also like sharing content related to the stuff that I have learned
            over the years in{" "}
            <span className="text-black  font-bold"> Web Development</span> so
            it can help other people of the Dev Community. Feel free to Connect
            or Follow me on my Linkedin where I post useful content related to
            Web Development and Programming
          </p>
          <p className="pb-4 leading-7 text-gray-500 tracking-wide text-base">
            I'm open to <span className="text-black  font-bold"> Job</span>{" "}
            opportunities where I can contribute, learn and grow. If you have a
            good opportunity that matches my skills and experience then don't
            hesitate to <span className="text-black  font-bold"> contact</span>{" "}
            me.
          </p>
          <div className="box-3">
            <div className="bttn btn-three">
              <span>HOVER ME</span>
            </div>
            
          </div>
         
        </div>
        <div className="w-1/2 relative ">
          <h1 className="text-center light-700 text-3xl">My Skills</h1>

          <div className="grid grid-cols-3 gap-5  pl-24 pt-8 ">
            <img
              src="/video/css3.png"
              width={"90px"}
              className=" animate-bounce hover:animate-spin  hover:bg-gray-300 p-2"
            />
            <img
              src="/video/html.png"
              width={"80px"}
              className="    hover:bg-gray-300 p-2"
            />
            <img
              src="/video/js1.png"
              className="   w-28 hover:bg-gray-300 p-2"
            />
            <img
              src="/video/typescript.png"
              className="  w-20 hover:bg-gray-300 p-2"
            />
            <img
              src="/video/bootstrap.png"
              className="  w-20 hover:bg-gray-300 p-2"
            />
            <img
              src="/video/tailwind.jpg"
              className="  w-32 hover:bg-gray-300 p-2"
            />
            <img
              src="/video/react.png"
              className="  w-20 hover:bg-gray-300 p-2"
            />
            <img
              src="/video/next.png"
              className="  w-20 hover:bg-gray-300 p-2"
            />
            <img
              src="/video/github.png"
              className="  w-24 hover:bg-gray-300 p-2"
            />
          </div>
        </div>
      </div>

      
    </div> */}

      <div className="">
        <div className="flex justify-around w-5/5 ">
          <div className=" w-2/4">
            <p className="text-xl leading-8 mt-32 dark:text-gray-100 ">
              " Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology "
            </p>
            <div className="border-b-4 border-amber-800 w-1/2 ml-28 mt-4"></div>
          </div>
          <div>
            <button className="text-lg rounded-lg mt-32 bg-amber-400 text-slate-50 px-8  py-4 font-light ">
              ABOUT ME
            </button>
          </div>
        </div>

        <div className="  my-24 w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]  ">
        <img src="/video/know.jpg" className="absolute -z-10 w-full h-[460px]"/>
          <h1 className=" ml-10 light-700 text-3xl   py-10">
            <span className="border-l-2 border-amber-800 mr-4"></span>
            Get to know me!
          </h1>
          
          <div className="mr-24 w-2/4 ml-auto  ">
          <p className="pb-4 leading-7 text-gray-800 tracking-wide text-lg">
            I'm a{" "}
            <span className="text-slate-900 font-bold">
              Frontend Web Developer
            </span>{" "}
            building the Front-end of Websites and Web Applications that leads
            to the success of the overall product. Check out some of my work in
            the <span className="text-black  font-bold">Projects</span> section.
          </p>
          <p className="pb-4 leading-7 text-gray-800 tracking-wide text-lg">
            I also like sharing content related to the stuff that I have learned
            over the years in{" "}
            <span className="text-black  font-bold"> Web Development</span> so
            it can help other people of the Dev Community. Feel free to Connect
            or Follow me on my Linkedin where I post useful content related to
            Web Development and Programming
          </p>
          <p className="pb-4 leading-7 text-gray-800 tracking-wide text-lg">
            I'm open to <span className="text-black  font-bold"> Job</span>{" "}
            opportunities where I can contribute, learn and grow. If you have a
            good opportunity that matches my skills and experience then don't
            hesitate to <span className="text-black  font-bold"> contact</span>{" "}
            me.
          </p>
          </div>
      
        </div>
      </div>
    </>
  );
};

export default About;
