import React, { useState ,useEffect} from "react";
import map from "../assets/map.jpg";
import provedor from "../assets/provedor.jpeg";
import "../styles/Landing.css";
import axios from 'axios';


function Aboutus() {
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  const [aboutUsData,setAboutUsData] = useState("");
  const [serviceData,setServiceData] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/about-uses');
      

        const aboutUs = response.data.data[0].attributes.contenido[0].children[0].text;
        const service = response.data.data[1].attributes.contenido[0].children[0].text
  
       
      
        setAboutUsData(aboutUs);
        setServiceData(service);
        // setServiceData(service);
       

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
    <div className="fillwindow">
      <div className="about-us">
        <div>
          <div className="about-us-text">
            <h2>Quienes Somos </h2>
            {/* Neoquim es una empresa ecuatoriana con 30 años de experiencia en
            territorio nacional e internacional. Nuestros productos cuentan con
            todos los permisos y registros necesarios. Somos una empresa con
            certificado Buenas Prácticas de Manufactura, certificaciones de
            Agrocalidad, Arcsa e ISSA con el fin de garantizar la fabricación,
            distribución y comercialización de todos nuestros productos. */}
            {aboutUsData}
          </div>

          <div className="about-us-text ">
            <h2>Servicio Personalizado </h2>
            {/* Ofrecemos productos personalizados, el cliente puede elegir las
            características de su producto que se amolden a sus necesidades y
            gustos. Evolucionamos con las tendencias mundiales de la
            biotecnología actuamos pensando en el 2030, para el cuidado y
            bienestar de la familia. Tenemos los mejores desinfectantes para
            alimentos, personas, superficies, agrícolas y veternaria. */}

            {serviceData}
          </div>
        </div>

        <img src={map} className="map-image" alt="map picture" />
      </div>
      <div className="about-us-text provedor-text">
        <h2 style={{ textAlign: "center" }}>Distribuidor Exclusivo </h2>
        <div className="provedor-center">
          <img
            src={provedor}
            className="provedor-image"
            alt="provedor picture"
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
