import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Landing from "./pages/Landing";
import Aboutus from "./pages/Aboutus";

import Contactanos from "./pages/Contactanos";
import Agricola from "./pages/Productos/Agricola";
import Industrial from "./pages/Productos/Industrial";
import Veterinaria from "./pages/Productos/Veterinaria";
function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
  }

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <div style={{maxWidth:"1500px", margin:"0 auto"}}>
    

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/aboutus" element={<Aboutus />} />

          <Route path="/contactus" element={<Contactanos />} />
          <Route path="/agricola" element={<Agricola />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/veterinaria" element={<Veterinaria />} />
        </Routes>
        <a
          href="https://wa.me/593985396657"
          class="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-whatsapp whatsapp-icon"></i>
        </a>

        </div>

     
        <Footer />
      </Router>
    </div>
  );
}

export default App;
