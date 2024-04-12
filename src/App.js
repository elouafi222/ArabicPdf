import React, { useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import DocumentGenerator from "./pages/DocumentGenerator";
import { useTranslation } from "react-i18next";

AOS.init({ duration: 1000 });


function NavigationNavbar() {
  const location = useLocation();
  const isNavbarVisible = !["/documentGenerator"].includes(location.pathname);

  return isNavbarVisible ? <Navbar /> : null;
}
function NavigationFooter() {
  const location = useLocation();

  const isFooterVisible = !["/documentGenerator"].includes(location.pathname);
  return isFooterVisible ? <Footer /> : null;
}
function App() {
  
  const [t, i18n] = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  useEffect(() => {
    // Add RTL class to HTML element when language is Arabic
    if (i18n.language === "ar") {
      document.documentElement.classList.add("rtl");
    } else {
      // Remove RTL class when language is not Arabic
      document.documentElement.classList.remove("rtl");
    }
  }, [i18n.language]);
  return (
    <BrowserRouter>
      <NavigationNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentGenerator" element={<DocumentGenerator />} />
      </Routes>
      <NavigationFooter />
    </BrowserRouter>
  );
}

export default App;
