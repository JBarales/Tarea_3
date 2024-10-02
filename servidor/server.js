const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let users = []; // Arreglo para almacenar usuarios

// Ruta de registro
app.post('/register', (req, res) => {
    const { nombre, dpi, email, contraseña } = req.body;

    // Validar si el email ya está registrado
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ error: 'El email ya está registrado.' });
    }

    // Agregar el nuevo usuario al arreglo
    users.push({ nombre, dpi, email, contraseña });
    res.status(201).json({ message: 'Usuario registrado exitosamente.' });
});

// Ruta de login
app.post('/login', (req, res) => {
    const { email, contraseña } = req.body;

    // Validar las credenciales
    const user = users.find(user => user.email === email && user.contraseña === contraseña);
    if (!user) {
        return res.status(401).json({ error: 'Credenciales inválidas.' });
    }

    res.json({ message: 'Login exitoso.', user: { nombre: user.nombre, email: user.email } });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

