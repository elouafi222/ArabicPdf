import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";
import PDFViewer from "../components/PDFViewer";
import { useTranslation } from "react-i18next";
function DocumentGenerator() {
  const [t, i18n] = useTranslation();
  const [generatedPDF, setGeneratedPDF] = useState(null);
  const [inputText, setInputText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  useEffect(() => {
    // Add RTL class to HTML element when language is Arabic
    if (i18n.language === "ar") {
      document.documentElement.classList.add("rtl");
    } else {
      // Remove RTL class when language is not Arabic
      document.documentElement.classList.remove("rtl");
    }
  }, [i18n.language]);
  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("https://namadijapi.onrender.com/genratepdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ questionName: inputText, directoryName: "Med" }),
      });
      const data = await response.json();
      if (response.ok) {
        setGeneratedPDF(data.url);
      } else {
        console.error("Error generating PDF:", data.error);
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="chatbot-container px-lg-4 px-2 pt-3">
      <div className="row">
        <div className="col-md-12">
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
            className="page-header d-flex flex-row align-items-center justify-content-between pb-2 px-2 px-lg-5"
          >
            <span to="/" className="navbar-brand d-flex align-items-center">
              <img src={logo} className="me-1 logo" alt="" srcset="" /> arabicPDF
            </span>

            <Link to="/">
              {" "}
              <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 60 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-2 mb-2 px-3 px-lg-5  d-flex h-10 align-items-center"
          >
            <input
  rows="5"
  id="textSpeech"
  className={`form-control no-outline  ${i18n.language === 'ar' ? 'rounded-end-4 rounded-start-0' : 'rounded-start-4 rounded-end-0'}`}
  placeholder={t('docgenerator.placeholder')}
  required
  value={inputText}
  onChange={handleInputChange}
/>

<div className="input-group-append">
  <button
    id="sendQuestionButton"
    className={`btn btn-blue chatinput no-outline ${i18n.language === 'ar' ? 'rounded-start-4 rounded-end-0' : 'rounded-start-0 rounded-end-4'} `}
    onClick={generatePDF}
  >
    <span className="">{isGenerating ? (
        <>
        <span className="d-none d-lg-block">{t('docgenerator.generating')}</span>
       <div className=" spinner-border spinner-border-sm d-block d-lg-none" role="status">
       <span className="visually-hidden">Loading...</span>
     </div></>
    ) : (
      <>
       <span  className="d-none d-lg-block"> {t('docgenerator.generate')}</span>
        <i className="fa-solid py-1 fa-paper-plane d-block d-lg-none"></i>
      </>
    )}</span>
  </button>
</div>

          </motion.div>
        </div>
        <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
          {generatedPDF && <PDFViewer pdfUrl={generatedPDF} />}
        </div>
      </div>
    </div>
  );
}

export default DocumentGenerator;
