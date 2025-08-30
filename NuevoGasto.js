import React, { useState } from "react";
import "./styles.css"; // 👈 Usa el mismo CSS

const NuevoGasto = () => {
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState("");
  const [fecha, setFecha] = useState("");
  const [mensaje, setMensaje] = useState(""); // Para feedback

  // ⚡ ID del usuario logueado (en este ejemplo fijo en 1)
  const usuario_id = 1;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/nuevogasto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario_id, descripcion, monto, fecha }),
      });

      const data = await res.json();

      if (res.ok) {
        setMensaje("✅ Gasto guardado con éxito");
        // 🔹 Limpio los campos
        setDescripcion("");
        setMonto("");
        setFecha("");
      } else {
        setMensaje("❌ Error: " + data.message);
      }
    } catch (err) {
      console.error("Error al conectar con la API:", err);
      setMensaje("⚠️ Error en el servidor");
    }
  };

  return (
    <div className="form-container">
      <h2>Nuevo Gasto</h2>
      <form onSubmit={handleSubmit} className="form-box">
        <input
          type="text"
          placeholder="e.g., Comida, Transporte"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="0.00"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <button type="submit">Agregar Gasto</button>
      </form>

      {/* Mensaje dinámico */}
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default NuevoGasto;
