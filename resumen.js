import React from "react";
import { FaHome, FaFileAlt, FaChartBar, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaDollarSign, FaFileInvoice, FaUtensils } from "react-icons/fa";
import "./resumen.css";

function Resumen() {
  return (
    <div className="resumen-container">
      {/* Contenido principal */}
      <div className="resumen-content">
        <h2 className="resumen-title">Resumen</h2>

        {/* Balance */}
        <Link to="/balance">
        <div className="balance-card">
          <h3>Balance</h3>
          <div className="balance-amount">
            <span>$165.000</span>
            <span className="arrow">➤</span>
          </div>
        </div>
        </Link>

        {/* Transacciones recientes */}
        <h3 className="transacciones-title">Transacciones Recientes</h3>
        <div className="transacciones-list">
          <div className="transaccion">
            <FaShoppingCart className="icono" />
            <div className="transaccion-info">
              <p className="titulo">Supermercado</p>
              <p className="categoria">Compras</p>
            </div>
            <p className="monto negativo">-$400.000</p>
          </div>

          <div className="transaccion">
            <FaDollarSign className="icono" />
            <div className="transaccion-info">
              <p className="titulo">Empresa Tech</p>
              <p className="categoria">Salario</p>
            </div>
            <p className="monto positivo">+$715.000</p>
          </div>

          <div className="transaccion">
            <FaFileInvoice className="icono" />
            <div className="transaccion-info">
              <p className="titulo">Compañía Eléctrica</p>
              <p className="categoria">Servicios</p>
            </div>
            <p className="monto negativo">-$100.000</p>
          </div>

          <div className="transaccion">
            <FaUtensils className="icono" />
            <div className="transaccion-info">
              <p className="titulo">Cena</p>
              <p className="categoria">Restaurante</p>
            </div>
            <p className="monto negativo">-$50.000</p>
          </div>
        </div>
      </div>

      {/* Footer Navegación */}
      <div className="footer-nav">
        <Link to="/resumen" className="nav-item">
          <FaHome size={20} />
          <p>Resumen</p>
        </Link>
        <Link to="/nuevatransaccion" className="nav-item">
          <FaFileAlt size={20} />
          <p>Transacciones</p>
        </Link>
        <Link to="/presupuesto" className="nav-item">
          <FaChartBar size={20} />
          <p>Presupuesto</p>
        </Link>
        <Link to="/ajustes" className="nav-item">
          <FaCog size={20} />
          <p>Ajustes</p>
        </Link>
      </div>
    </div>
  );
}

export default Resumen;
