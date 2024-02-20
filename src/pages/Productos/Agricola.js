import React from "react";
import PdfViewer from "../../components/PdfViewer";
import agricolapdf from "../../assets/Pdf/Agricola.pdf";
import farmimage from "../../assets/Carousel2.jpg";
import farmimagemovil from "../../assets/Carousel1movil.jpg";
import "../../styles/Templates.css";
import axios from 'axios';
import { useState,useEffect } from "react";

function Agricola() {
  const name = "Agrícola";
  
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          
          const response = await axios.get('http://localhost:1337/api/productos/1');
        
        
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
        <img src={farmimage} className="main-image" alt="ag image" />
      </div>
      <div className="movil-display">
        <img src={farmimagemovil} className="main-image" alt="ag image" />
      </div>

      <PdfViewer Location={agricolapdf} Name={name} Text={data? data : "Loading..."} />
    </div>
  );
}

export default Agricola;
