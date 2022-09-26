import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Slider from "../components/Slider";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <>
      
        <Navbar />
        <Header id="header" />
        <About id="about" />
        <Project id="project" />
        <Slider />
        <Footer />
      
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
