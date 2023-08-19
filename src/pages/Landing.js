import React from "react";
import Carousel from "../components/Carousel";
import CarouselMovil from "../components/CarouselMovil";
import ProductBoxes from "../components/ProductBoxes";
import laboratorio from "../assets/QuienesSomos/laboratorio2.jpg";
import products from "../assets/products.jpg";

import forest from "../assets/forest.jpg";
import coto from "../assets/coto.jpg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "../styles/Landing.css";
function Landing() {
  return (
    <div>
      <div className="web-display">
        <Carousel />
      </div>
      <div className="movil-display">
        <CarouselMovil />
      </div>

      <div className="top-space">
        <div className="padding-wrapper">
          <h3 className="httext-box-top-title">Nuestras Soluciones</h3>
          <div className="hhtext-box padding-wrapper ">
            <div className="hhtext-box-text-sub">
              Desarrollamos e innovamos los mejores productos naturales
              aplicando lo mejor de la biotecnología.
            </div>
          </div>
          <ProductBoxes />
        </div>
      </div>
      <div className="hhtext-box  grey-back">
        <div className="hhtext-box-text">
          <div className="hhtext-box-text-sub2">
            <span className="text-block-content-title">
              <h2>Compromiso Ambiental</h2>
            </span>
            Fabricamos productos de acción efectiva pensando en el medio
            ambiente y que no afecten a la salud del consumidor. Continuamente
            evolucionamos con las tendencias mundiales de la biotecnología y
            avances tecnológicos.
          </div>

          <div>
            <button className="hhtext-box-button">
              <Link to="/aboutus"> Descubre Mas</Link>
            </button>
          </div>
        </div>
        <img src={forest} className="text-block-image" alt="products picture" />
      </div>

      {/* product */}
      <div className="top-space">
        <div className="text-block ">
          <img
            src={products}
            className="text-block-image"
            alt="products picture"
          />

          <div className="text-block-content ">
            <span className="text-block-content-title">
              <h2>Soluciones Efectivas</h2>
            </span>
            <div>
              Ofrecemos productos de calidad y efectividad que brindan las
              mejores soluciones. Trabajamos en conjunto pensando en el
              beneficio para nuestros clientes, distribuidores pequeños,
              medianos y para las grandes empresas de los distintos sectores.
            </div>
          </div>
        </div>
        {/* product */}

        <div className="text-block ">
          <img
            src={laboratorio}
            className="text-block-image"
            alt="lab picture"
          />
          <div className="text-block-content ">
            <span className="text-block-content-title">
              <h2>Innovacion Constante</h2>
            </span>
            Contamos con nuestro propio laboratorio interno lo cual nos da un
            conocimiento de nuestros ingredientes y los verdaderos beneficios
            que brindan nuestros productos. Continuamente evolucionamos con las
            tendencias mundiales de la biotecnología y avances tecnológicos.
          </div>
        </div>

        <div className="text-block ">
          <img src={coto} className="text-block-image" alt="products picture" />

          <div className="text-block-content">
            <span className="text-block-content-title">
              <h2>Responsabilidad Social</h2>
            </span>
            Nuestros productos son elaborados pensando en el bienestar y futuro
            de la comunidad y el medio ambiente. Solo ingredientes naturales,
            sin conservantes sintéticos, sin agentes espumantes. Trabajamos con
            las 5 R de Sustenatabilidad: reducir, reparar, recuperar, reutilizar
            y reciclar. Libre de crueldad animal
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
