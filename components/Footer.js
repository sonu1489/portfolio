import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {

  const scrollToTop = () => {
    scroll.scrollToTop(); 
};
  return (
    <>
   
      <div className="flex w-5/5  relative justify-between px-8 pt-24 pb-32   ">
      <video
          src="/video/footer.mp4"
          loop
          autoPlay
          muted
          className="absolute bottom-0 opacity-60 left-0 w-full h-full  -z-10 video-footer object-cover"
        />

        <div className="w-3/4">
          <h1 className="light-700 text-slate-50 text-5xl drop-shadow-2xl">SONU SHARMA</h1>
          <p className=" text-slate-50 pt-4 font-medium text-xl  text-gray-700">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="  mt-8 flex gap-4 " onClick={scrollToTop}>
          <a href="#" className="hover-me">
            <span></span>
          </a>
          <a href="#" className="hover-me">
            <span></span>
          </a>
          <a href="#" className="hover-me">
            <span></span>
          </a>
          <a href="#" className="hover-me">
            <span></span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
