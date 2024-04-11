import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";
import PDFViewer from "../components/PDFViewer";

function DocumentGenerator() {
  const [generatedPDF, setGeneratedPDF] = useState(null);
  const [inputText, setInputText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

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
              className="form-control no-outline rounded-start-4 rounded-end-0"
              placeholder="Type here .. "
              required
              value={inputText}
              onChange={handleInputChange}
            />

            <div className="input-group-append">
              <button
                id="sendQuestionButton"
                className="btn btn-blue chatinput no-outline rounded-start-0 rounded-end-4"
                onClick={generatePDF}
              >
                <span>{isGenerating ? 'Generating...' : 'Generate'}</span>
              </button>
            </div>
          </motion.div>
        </div>
        <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
          {isGenerating && <Spinner />}
          {generatedPDF && <PDFViewer pdfUrl={generatedPDF} />}
        </div>
      </div>
    </div>
  );
}

const Spinner = () => (
  <div className="spinner-border " role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

export default DocumentGenerator;
