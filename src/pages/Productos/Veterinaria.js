import React from "react";
import vet from "../../assets/Pdf/Veterinaria.pdf";
import PdfViewer from "../../components/PdfViewer";
import vetimage from "../../assets/Carousel3.jpg";
import vetimagemovil from "../../assets/Carousel3movil.jpg";
import axios from 'axios';
import { useState,useEffect } from "react";
function Veterinaria() {

  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:1337/api/productos/3');
        
        
          console.log(response.data)
          const responseArray = response.data.data.attributes.contenido;
          // {element.children[0].text}
          const content = responseArray.map((element, index) => (
            <React.Fragment key={index}>
        {element.children[0].text}
        <br />
      </React.Fragment>
          ));
        


          setData(content);

          // setData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []); 

  return (
    <div>
      <div className="web-display">
        <img src={vetimage} className="main-image" alt="ag image" />
      </div>
      <div className="movil-display">
        <img src={vetimagemovil} className="main-image" alt="ag image" />
      </div>
      <PdfViewer Location={vet} Name="Veterinaria" Text={data} />
    </div>
  );
}

export default Veterinaria;
