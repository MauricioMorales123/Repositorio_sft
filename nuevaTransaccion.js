import React from "react";
import "./nuevaTransaccion.css";
import { FaHome, FaListAlt, FaChartBar, FaCog, FaArrowRight, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function NuevaTransaccion() {
  return (
    <div className="nueva-transaccion-container">
      {/* Header */}
      <header className="header">
        <FaTimes className="close-icon" />
        <h2>Nueva Transacción</h2>
      </header>

      {/* Botones */}
      <div className="botones-container">
        <button className="btn ingreso">
          <span>Nuevo Ingreso</span>
          <FaArrowRight />
        </button>

        <button className="btn gasto">
          <span>Nuevo Gasto</span>
          <FaArrowRight />
        </button>
      </div>

      {/* Footer Navegación */}
      <nav className="footer-nav">
        <Link to="/resumen" className="nav-item">
          <FaHome />
          <span>Resumen</span>
        </Link>
        <Link to="/nuevatransaccion" className="nav-item">
          <FaListAlt />
          <span>Transacciones</span>
        </Link>
        <Link to="/presupuesto" className="nav-item">
          <FaChartBar />
          <span>Presupuesto</span>
        </Link>
        <Link to="/ajustes" className="nav-item">
          <FaCog />
          <span>Ajustes</span>
        </Link>
      </nav>
    </div>
  );
}

export default NuevaTransaccion;
