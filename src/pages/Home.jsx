import React from "react";
import About from "../components/About";
import Services from "../components/Services";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HowToUse from "../components/HowToUse";
import { useTranslation } from "react-i18next";
function Home() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <div id="home" className="home">
        <div className=" container text-center  px-5 d-flex flex-column justify-content-center align-items-center">
          <motion.h5
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 4, type: "spring" }}
          >
           {t('home.welcome')}
          </motion.h5>
          <h1>
          {t('home.revolution')}
          </h1>
          <motion.p
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 4, type: "spring" }}
          >
           {t('home.description')}
          </motion.p>
         <motion.span initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            whileHover={{ x: 20 }}
            transition={{ delay: 2, type: "spring", stiffness: 300 }}>
         <Link
            to="/documentGenerator"
            className="btn btn-blue btn-lg rounded-5 px-5"
          >
            {t('home.get_started')}
          </Link>
         </motion.span>
        </div>
      </div>
      <About />
      <Services />
      <HowToUse />
    </>
  );
}

export default Home;
