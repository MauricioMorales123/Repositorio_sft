import React from "react";
import { useNavigate } from "react-router-dom";
import "./presupuesto.css";
import { FaArrowLeft, FaHome, FaClipboardList, FaChartBar, FaCog } from "react-icons/fa";

function Presupuesto() {
  const navigate = useNavigate();

  return (
    <div className="presupuesto-container">
      {/* Header */}
      <header className="presupuesto-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h2>Presupuesto</h2>
      </header>

      {/* Opciones */}
      <main className="presupuesto-main">
        <div className="card ingresos" onClick={() => alert("Ir a historial de ingresos")}>
          <p>Historial de Ingresos</p>
          <span>→</span>
        </div>

        <div className="card gastos" onClick={() => alert("Ir a historial de gastos")}>
          <p>Historial de Gastos</p>
          <span>→</span>
        </div>

        <div className="card balances" onClick={() => alert("Ir a historial de balances")}>
          <p>Historial de Balances Generados</p>
          <span>→</span>
        </div>
      </main>

      {/* Footer de navegación */}
      <footer className="footer-nav">
        <button onClick={() => navigate("/resumen")}>
          <FaHome /> <span>Resumen</span>
        </button>
        <button onClick={() => navigate("/nuevaTransaccion")}>
          <FaClipboardList /> <span>Transacciones</span>
        </button>
        <button onClick={() => navigate("/presupuesto")} className="active">
          <FaChartBar /> <span>Presupuesto</span>
        </button>
        <button onClick={() => navigate("/ajustes")}>
          <FaCog /> <span>Ajustes</span>
        </button>
      </footer>
    </div>
  );
}

export default Presupuesto;
