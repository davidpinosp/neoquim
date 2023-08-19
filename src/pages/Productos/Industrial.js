import React from "react";
import industrial from "../../assets/Pdf/InsutrialHogar.pdf";
import PdfViewer from "../../components/PdfViewer";
import indimage from "../../assets/Carousel1.jpg";
import indimagemovil from "../../assets/Carousel2movil.jpg";
function Industrial() {
  const text =
    "Nuestra línea de productos Hogar/Institucional ofrece soluciones de desinfección y limpieza efectivas para mantener ambientes seguros y saludables. Desde el hogar hasta entornos institucionales, nuestros productos garantizan una limpieza profunda y una desinfección de confianza. Respaldados por la más avanzada tecnología química, nuestros productos son esenciales para mantener espacios limpios y protegidos.";
  return (
    <div>
      <div className="web-display">
        <img src={indimage} className="main-image" alt="ag image" />
      </div>
      <div className="movil-display">
        <img src={indimagemovil} className="main-image" alt="ag image" />
      </div>
      <PdfViewer Location={industrial} Name="Industrial y Hogar" Text={text} />
    </div>
  );
}

export default Industrial;
