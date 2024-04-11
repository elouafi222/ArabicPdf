import React from "react";
import About from "../components/About";
import Services from "../components/Services";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HowToUse from "../components/HowToUse";
function Home() {
  return (
    <>
      <div id="home" className="home">
        <div className=" container text-center  px-5 d-flex flex-column justify-content-center align-items-center">
          <motion.h5
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 4, type: "spring" }}
          >
            Welcome to arabicPDF
          </motion.h5>
          <h1>
            Morocco's AI Revolution <br />
            Starts Here
          </h1>
          <motion.p
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 4, type: "spring" }}
          >
            Welcome to our online platform designed to streamline the process of generating Moroccan documents effortlessly.
          </motion.p>
         <motion.span initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            whileHover={{ x: 20 }}
            transition={{ delay: 2, type: "spring", stiffness: 300 }}>
         <Link
            to="/documentGenerator"
            className="btn btn-blue btn-lg rounded-5 px-5"
          >
            Get Started
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
