import React from "react";
import {
  Phone,
  Room,
  Email,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="logo-green">
      <div className="footer">
        <div className="footer-add">
          <div className="footer-line">
            <Room />
            <p className="footer-content">
              De Los Arupos E1-145, Quito, Pichincha, Ecuador{" "}
            </p>
          </div>

          <div className="footer-line">
            <Email /> <p className="footer-content"> pedidos@neqoquim.ec</p>
          </div>
          <div className="footer-line">
            <Phone />
            <p className="footer-content"> 2473203</p>
          </div>

          <div>
            <Facebook style={{ fontSize: 25 }} />
            <Twitter style={{ fontSize: 25 }} />
            <LinkedIn style={{ fontSize: 25 }} />
            <Instagram style={{ fontSize: 25 }} />
          </div>
        </div>

        <div>
          <table className="footer-table">
            <thead>
              <tr>
                <th>Dia</th>
                <th>Horario</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lun</td>
                <td> 8:30 AM - 5:30 PM</td>
              </tr>
              <tr>
                <td>Mar</td>
                <td>8:30 AM - 5:30 PM</td>
              </tr>
              <tr>
                <td>Mie</td>
                <td>8:30 AM - 5:30 PM</td>
              </tr>
              <tr>
                <td>Jue</td>
                <td>8:30 AM - 5:30 PM</td>
              </tr>
              <tr>
                <td>Vie</td>
                <td>8:30 AM - 5:30 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="footer-trademark">
        <p>&copy; 2023 Neoquim. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
