import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaListAlt, FaChartBar, FaCog } from "react-icons/fa";
import "./Ajustes.css";

function Ajustes() {
  return (
    <div className="ajustes-container">
      {/* Encabezado */}
      <header className="ajustes-header">
        <h2>Ajustes</h2>
      </header>

      {/* Contenido principal */}
      <main className="ajustes-main">
        <section>
          <h3 className="ajustes-section-title">General</h3>
          <div className="ajustes-item">
            <span>Tema de la aplicación</span>
            <span className="ajustes-option">Sistema</span>
          </div>
          <div className="ajustes-item">
            <span>Moneda</span>
            <span className="ajustes-option">COP</span>
          </div>
        </section>

        <section>
          <h3 className="ajustes-section-title">Notificaciones</h3>
          <div className="ajustes-item">
            <span>Recordatorios de gastos</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="ajustes-item">
            <span>Alertas de presupuesto</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </section>

        <section>
          <h3 className="ajustes-section-title">Cuenta</h3>
          <div className="ajustes-item ajustes-link">
            <span>Configuración de la cuenta</span>
            <span className="arrow">›</span>
          </div>
          <div className="ajustes-item ajustes-link">
            <span>Cerrar sesión</span>
            <span className="arrow">›</span>
          </div>
        </section>
      </main>

      {/* Footer-Navegación (igual al de Presupuesto.js) */}
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

        <Link to="/ajustes" className="nav-item active">
          <FaCog />
          <span>Ajustes</span>
        </Link>
      </nav>
    </div>
  );
}

export default Ajustes;
