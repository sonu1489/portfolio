
/* eslint-disable*/
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link, animateScroll as scroll } from "react-scroll";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import ThemeChanger from "./ThemeChanger";
// import img from "next/img";
const Navbar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const handleLocaleChange = (event) => {
    const value = event.target.value;
    event.preventDefault();

    router.push(router.route, "/", {
      locale: value,
    });
  };

  return (
    <div>
      <motion.div
        variants={fadeIn("down")}
        initial="initial"
        animate="animate"
        className="p-8   "
      >
        <div className="flex-col flex justify-center items-center  gap-4  sm:flex-row justify-between  text-2xl">
          <div className="flex text-th-primary-light">
            <img src="/profile.jpg"  className="w-10 h-10 mr-6 rounded-full" alt="profile" />
            <h1>Sonu Sharma</h1>
          </div>
          <div className=" text-th-primary-light flex">
            <Link
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8  "
            >
              {" "}
              {t("Home")}
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8 "
            >
              {t("About")}
            </Link>

            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8  "
            >
              {t("Project")}
            </Link>

            <select
              id="location"
              name="location"
              className="w-auto mx-4    flex   focus:outline-none focus:ring-th-primary-dark focus:border-th-primary-dark  rounded-md"
              onChange={handleLocaleChange}
              value={router.locale}
            >
              <option  value="en"> English</option>
              <option  value="es"> Spanish</option>
              <option  value="fr"> French</option>
            </select>
            <ThemeChanger/>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
