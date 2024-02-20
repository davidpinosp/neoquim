import React from "react";
import industrial from "../../assets/Pdf/InsutrialHogar.pdf";
import PdfViewer from "../../components/PdfViewer";
import indimage from "../../assets/Carousel1.jpg";
import indimagemovil from "../../assets/Carousel2movil.jpg";
import { useState,useEffect } from "react";
import axios from "axios";
function Industrial() {
  
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:1337/api/productos/2');
        
        
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
        <img src={indimage} className="main-image" alt="ag image" />
      </div>
      <div className="movil-display">
        <img src={indimagemovil} className="main-image" alt="ag image" />
      </div>
      <PdfViewer Location={industrial} Name="Industrial y Hogar" Text={data} />
    </div>
  );
}

export default Industrial;
