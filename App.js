import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./paginas/login";      // página de inicio
import Iniciodesesion from "./paginas/iniciodesesion";
import Resumen from "./paginas/resumen";
import NuevaTransaccion from "./paginas/nuevaTransaccion";
import Presupuesto from "./paginas/presupuesto";
import Ajustes from "./paginas/Ajustes";
import Balance from "./paginas/balance";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />        {/* Página de inicio */}
        <Route path="/iniciodesesion" element={<Iniciodesesion />} />
        <Route path="/resumen"  element={<Resumen />} />
        <Route path="/nuevatransaccion" element={<NuevaTransaccion/>} />
        <Route path="/presupuesto" element={<Presupuesto/>} />
        <Route path="/ajustes" element={<Ajustes/>} />
        <Route path="/balance" element={<Balance/>} />
      </Routes>
    </Router>
  );
}

export default App;

