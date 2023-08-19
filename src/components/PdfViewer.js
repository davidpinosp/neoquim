import React from "react";
import { useState } from "react";
import "../styles/Templates.css";
import { Button } from "@mui/material";

function PdfViewer({ Location, Name, Text, Image1 }) {
  const [loading, setLoading] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);

  const handleLoading = () => {
    setLoading(true);
  };

  return (
    <div className="main-content">
      <div className="main-subtitle">
        <h1>{"Linea " + Name} </h1>
      </div>
      <div className="main-text">{Text}</div>

      <div className="">
        <div className="hhtext-box-button button-container">
          <div classname="">
            <a href={Location} download>
              Catalogo Digital
            </a>
          </div>
        </div>
      </div>

      {/* {loading || (
        <div className="loading-spinner">
          Loading....
          <div className="spinner"></div>
        </div>
      )} */}
      {/* <div
        className={`content-pdf-container pdfOpen ${pdfOpen && " display-on"}`}
      >
        <iframe
          src={Location}
          title="PDF Viewer"
          width="650px"
          height="900px"
          onLoad={handleLoading}
        ></iframe>
      </div> */}
    </div>
  );
}

export default PdfViewer;
