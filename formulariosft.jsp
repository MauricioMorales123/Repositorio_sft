<%-- 
    Document   : formulariosft
    Created on : 29/07/2025, 7:36:50 p. m.
    Author     : cmmau
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Crear Cuenta</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            padding: 40px;
        }
        form {
            width: 300px;
            margin: auto;
        }
        input {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border-radius: 8px;
            border: 1px solid #ccc;
            background-color: #edf2f5;
        }
        button {
            width: 100%;
            padding: 12px;
            background-color: #a5d4f6;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h2>Crea tu cuenta</h2>
    <form action="registroServlet" method="post">
        <input type="text" name="usuario" placeholder="Crea un nombre de usuario" required />
        <input type="email" name="correo" placeholder="Correo electrónico" required />
        <input type="password" name="password" placeholder="Contraseña" required />
        <input type="password" name="confirmar" placeholder="Confirmar contraseña" required />
        <button type="submit">Registrarse</button>
    </form>
</body>
</html>

