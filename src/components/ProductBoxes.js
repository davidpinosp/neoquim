import React from "react";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import HomeIcon from "@mui/icons-material/Home";
import FactoryIcon from "@mui/icons-material/Factory";
import PetsIcon from "@mui/icons-material/Pets";
import { Link } from "react-router-dom";

function ProductBoxes() {
  return (
    <div className="product-box-container">
      <Link to="/agricola">
        <div className="product-box">
          <AgricultureIcon />

          <h2>Agrícola</h2>
        </div>
      </Link>
      <Link to="/industrial">
        <div className="product-box">
          <HomeIcon />
          <h2>Hogar</h2>
        </div>
      </Link>
      <Link to="/industrial">
        <div className="product-box">
          <FactoryIcon />
          <h2>Industrial</h2>
        </div>
      </Link>
      <Link to="/veterinaria">
        <div className="product-box">
          <PetsIcon />
          <h2> Veterinaria</h2>
        </div>
      </Link>
    </div>
  );
}

export default ProductBoxes;
