// src/pages/iniciodesesion.js
import React from "react";
import "./iniciodesesion.css";

function Iniciodesesion() {
  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <img src="/logoinicio.png" alt="logo" className="login-logo" />

      <form className="login-form">
        <div className="form-group">
          <label>Nombre de usuario</label>
          <input type="text" placeholder="Ingresa tu nombre de usuario" />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input type="password" placeholder="Ingresa tu contraseña" />
        </div>

        <button type="submit" className="login-btn">
          Iniciar sesión
        </button>
      </form>

      <p className="login-footer">
        ¿Olvidaste tu contraseña? <a href="#">Recupérala aquí</a>
      </p>
      <p className="login-footer">
        ¿No tienes cuenta? <a href="/registro">Crea una</a>
      </p>
    </div>
  );
}

export default Iniciodesesion;
