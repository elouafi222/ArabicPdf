import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/Logo.png";
import LangaugeButtons from "./LangaugeButtons";
import { useTranslation } from "react-i18next";
function Navbar() {
  const [t, i18n] = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("header");
      if (window.scrollY > 0) {
        navbar.classList.add("header-scrolled");
      } else {
        navbar.classList.remove("header-scrolled");
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      id="header"
      className="navbar navbar-expand-lg px-lg-5 px-1 fixed-top"
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} className="me-1 logo" alt="" /> arabicPDF
        </Link>

        <i
          id="menuIcon"
          className="fa-solid fa-bars d-lg-none "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        ></i>
        <div
          className="offcanvas offcanvas-top"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <div className=""></div>
            <i
              type="button"
              className="fa-solid fa-xmark close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></i>
          </div>
          <div className="offcanvas-body px-3 my-2 my-lg-0 d-flex  justify-content-center align-items-center">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item d-flex justify-content-center text-center">
                <a
                  className="nav-link px-3 "
                  href="#home"
                  activeclassname="active"
                  exact="true"
                  aria-current="page"
                >
                  {t('navbar.home')}
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center text-center">
                <a
                  className="nav-link px-3 my-2 my-lg-0"
                  href="#about"
                  activeclassname="active"
                  exact="true"
                >
                   {t('navbar.about')}
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center text-center">
                <a
                  className="nav-link px-3 my-2 my-lg-0"
                  href="#about"
                  activeclassname="active"
                  exact="true"
                >
                   {t('navbar.features')}
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center text-center">
                <a
                  className="nav-link px-3 my-2 my-lg-0"
                  href="#howtouse"
                  activeclassname="active"
                  exact="true"
                >
                  {t('navbar.how')}
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center text-center">
                <div className="dropdown nav-item ">
                  <a
                    className="nav-link  dropdown-toggle "
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {t('navbar.language')}
                  </a>
                  <div className="dropdown-menu dropdown-menu-end rounded-4" aria-labelledby="dropdownMenu2">
                    <LangaugeButtons />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
