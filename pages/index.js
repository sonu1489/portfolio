import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Project from "../components/Project";



export default function Home() {

  return (
    <>
      <div className="">
     
        <Navbar />
        <Header id="header" />
        <div className="dark:bg-slate-900">
        <About id="about"  />
        </div>
        <div className="dark:bg-slate-900 dark:text-gray-100 dark:py-4">

        <Project id="project" />
        </div>
        <Footer />
      </div>
    </>
  );
}
