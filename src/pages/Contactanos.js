import React, { useState, useRef, useEffect } from "react";
import "../styles/Contactanos.css";

const Contactanos = () => {
  const popupRef = useRef(null);

  // Event listener to close the popup when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopUp(false);
        setbuttonActive(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showPopUp, setShowPopUp] = useState(false);
  const [buttonActive, setbuttonActive] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = {
      subject: "Posible Prospecto de Negocio: " + formData.subject,

      text:
        "Nombre: " +
        formData.name +
        "\n\nEmail: " +
        formData.email +
        "\n\nMensaje : " +
        formData.message,
    };

    fetch(
      "https://clinquant-starship-81eb7c.netlify.app/.netlify/functions/app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(text),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle API response
        console.log(data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
    setbuttonActive(false);
    setShowPopUp(true);

    console.log(formData); // You can perform further actions, like sending the data to a server, here
  };

  return (
    <div>
      <header className="header">
        <h1>Contáctanos</h1>
      </header>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Empresa:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electronico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-button ">
            {buttonActive && (
              <button className="hhtext-box-button " type="submit">
                Enviar
              </button>
            )}

            {showPopUp && (
              <div ref={popupRef} className="confirmation-popup">
                <div className="popup-text">
                  {
                    "Su informacion ha sido enviada! \n\nUno de nuestros representantes estara en contacto pronto."
                  }
                </div>
                <button
                  className="hhtext-box-button"
                  onClick={() => {
                    setShowPopUp(false);
                  }}
                >
                  OK
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactanos;
