import React from "react";
import vet from "../../assets/Pdf/Veterinaria.pdf";
import PdfViewer from "../../components/PdfViewer";
import vetimage from "../../assets/Carousel3.jpg";
import vetimagemovil from "../../assets/Carousel3movil.jpg";
function Veterinaria() {
  const text =
    "Dedicados al bienestar animal, nuestra línea de productos Veterinaria se enfoca en la salud y el cuidado del ganado. Ofrecemos químicos diseñados para el cuidado de las ubres de las vacas, promoviendo la higiene y el confort. Además, proporcionamos soluciones de desinfección para la maquinaria utilizada en la atención de los animales. Nuestros productos veterinarios son una inversión en la salud y la productividad del ganado.";

  return (
    <div>
      <div className="web-display">
        <img src={vetimage} className="main-image" alt="ag image" />
      </div>
      <div className="movil-display">
        <img src={vetimagemovil} className="main-image" alt="ag image" />
      </div>
      <PdfViewer Location={vet} Name="Veterinaria" Text={text} />
    </div>
  );
}

export default Veterinaria;
