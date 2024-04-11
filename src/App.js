import React from "react";

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
