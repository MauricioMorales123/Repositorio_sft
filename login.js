import { Link } from "react-router-dom";
import "./login.css"; // Importamos los estilos

function Login() {
  return (
    <div className="login-container">
      <h1 className="login-title">SFT</h1>
      <p className="login-subtitle">Software Financiero para Todos</p>

      <img src="/logologin.png" alt="logo" className="login-logo" />

      <div className="login-buttons">
        <Link to="/">
          <button type="submit" className="login-btn">Iniciar Sesión</button>
        </Link>
        <Link to="/register">
          <button type="submit" className="login-btn">Registrarse</button>
        </Link>
      </div>

      <p className="login-terms">
        Al continuar, aceptas nuestros{" "}
        <a href="#">Términos de Servicio</a> y{" "}
        <a href="#">Política de Privacidad</a>.
      </p>
    </div>
  );
}

export default Login;
