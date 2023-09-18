import React from "react";
import { Link } from "react-router-dom";
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
            <Email /> <p className="footer-content"> pedidos@neqoquim.com.ec</p>
          </div>
          <div className="footer-line">
            <Phone />
            <p className="footer-content"> (+593) 02 346 5381</p>
          </div>

          <div>
            <a href="https://www.facebook.com/neoquim/">
              <Facebook style={{ fontSize: 25 }} />
            </a>

            <a href="https://www.linkedin.com/company/neoquim-ec/">
              <LinkedIn style={{ fontSize: 25 }} />
            </a>
            <a href="https://www.instagram.com/neoquim_ec/?max_id=1690753611867669133">
              <Instagram style={{ fontSize: 25 }} />
            </a>
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
