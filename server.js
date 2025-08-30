const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors()); // permite llamadas desde React
app.use(bodyParser.json());

// 🔹 Conexión a MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",      // tu usuario de MySQL
  password: "MauroMillos.28",      // tu contraseña de MySQL
  database: "bdsft", // la BD que creaste
});

db.connect(err => {
  if (err) {
    console.error("Error de conexión:", err);
  } else {
    console.log("Conectado a MySQL");
  }
});

// 🔹 Endpoint de registro
app.post("/api/registro", (req, res) => {
  const { usuario, email, password } = req.body;

  if (!usuario || !email || !password) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  const query = "INSERT INTO usuarios (usuario, email, password) VALUES (?, ?, ?)";
  db.query(query, [usuario, email, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error al registrar usuario" });
    }
    res.status(201).json({ message: "Usuario registrado con éxito", userId: result.insertId });
  });
});


// 🔹 Endpoint de login
app.post("/api/iniciodesesion", (req, res) => {
  const { usuario, password } = req.body;

  const query = "SELECT * FROM usuarios WHERE usuario = ? AND password = ?";
  db.query(query, [usuario, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error en el servidor" });
    }

    if (result.length > 0) {
      res.json({ message: "Login exitoso", user: result[0] });
    } else {
      res.status(401).json({ message: "Usuario o contraseña incorrectos" });
    }
  });
});

// 🔹 Guardar ingreso
app.post("/api/nuevoingreso", (req, res) => {
  const { usuario_id, descripcion, monto, fecha } = req.body;

  if (!usuario_id || !descripcion || !monto || !fecha) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  const query = "INSERT INTO ingresos (usuario_id, descripcion, monto, fecha) VALUES (?, ?, ?, ?)";
  db.query(query, [usuario_id, descripcion, monto, fecha], (err, result) => {
    if (err) {
      console.error("Error al guardar ingreso:", err);
      return res.status(500).json({ message: "Error al guardar ingreso" });
    }
    res.status(201).json({ message: "Ingreso registrado con éxito", ingresoId: result.insertId });
  });
});


// 🔹 Guardar gasto
app.post("/api/nuevogasto", (req, res) => {
  const { usuario_id, descripcion, monto, fecha } = req.body;

  if (!usuario_id || !descripcion || !monto || !fecha) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  const query = "INSERT INTO gastos (usuario_id, descripcion, monto, fecha) VALUES (?, ?, ?, ?)";
  db.query(query, [usuario_id, descripcion, monto, fecha], (err, result) => {
    if (err) {
      console.error("Error al guardar gasto:", err);
      return res.status(500).json({ message: "Error al guardar gasto" });
    }
    res.status(201).json({ message: "Gasto registrado con éxito", gastoId: result.insertId });
  });
});



app.listen(5000, () => {
  console.log("Servidor corriendo en http://localhost:5000");
});
