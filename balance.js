import React from "react";
import { FaArrowLeft, FaHistory, FaCalendarAlt, FaListUl } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./balance.css";

const Balance = () => {
  return (
    <div className="balance-container">
      {/* Encabezado */}
      <header className="balance-header">
        <Link to="/resumen" className="back-button">
          <FaArrowLeft />
        </Link>
        <h2>Balance</h2>
      </header>

      {/* Opciones */}
      <section className="balance-options">
        <div className="balance-option">
          <div className="icon-box">
            <FaHistory />
          </div>
          <div className="text-box">
            <h3>Generar balance de transacciones recientes</h3>
            <p>Calcula el balance de tus transacciones más recientes.</p>
          </div>
        </div>

        <div className="balance-option">
          <div className="icon-box">
            <FaCalendarAlt />
          </div>
          <div className="text-box">
            <h3>Seleccionar datos del historial para hacer balance</h3>
            <p>Elige datos específicos de tu historial para un balance personalizado.</p>
          </div>
        </div>

        <div className="balance-option">
          <div className="icon-box">
            <FaListUl />
          </div>
          <div className="text-box">
            <h3>Historial de balances generados</h3>
            <p>Accede a balances anteriores que has generado.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Balance;
