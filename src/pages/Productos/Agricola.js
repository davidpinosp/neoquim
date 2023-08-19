import React from "react";
import PdfViewer from "../../components/PdfViewer";
import agricolapdf from "../../assets/Pdf/Agricola.pdf";
import farmimage from "../../assets/Carousel2.jpg";
import farmimagemovil from "../../assets/Carousel1movil.jpg";
import "../../styles/Templates.css";

function Agricola() {
  const name = "Agricola";
  const text =
    "En nuestra línea de productos Agrícolas, nos especializamos en bioestimulantes y fertilizantes que impulsan el crecimiento y la productividad de los cultivos. Nuestras soluciones están basadas en la ciencia de la bioquímica vegetal, proporcionando nutrientes esenciales y promoviendo la salud de las plantas. Con un enfoque en la sostenibilidad y la mejora de la calidad de los cultivos, nuestros productos agrícolas contribuyen al éxito de los agricultores y al desarrollo sostenible.";
  return (
    <div>
      <div className="web-display">
        <img src={farmimage} className="main-image" alt="ag image" />
      </div>
      <div className="movil-display">
        <img src={farmimagemovil} className="main-image" alt="ag image" />
      </div>

      <PdfViewer Location={agricolapdf} Name={name} Text={text} />
    </div>
  );
}

export default Agricola;
