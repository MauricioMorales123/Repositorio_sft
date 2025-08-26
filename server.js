const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();
app.use(bodyParser.json());

// Simulación de base de datos en memoria
let users = [];

// Registro
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Verificar si el usuario ya existe
  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: "Usuario ya registrado" });
  }

  // Hashear contraseña
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.json({ message: "Usuario registrado exitosamente" });
});

// Login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Buscar usuario
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(400).json({ message: "Error en la autenticación" });
  }

  // Verificar contraseña
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(400).json({ message: "Error en la autenticación" });
  }

  res.json({ message: "Autenticación satisfactoria" });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
