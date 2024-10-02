import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [nombre, setNombre] = useState('');
    const [dpi, setDpi] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Enviar datos al servidor
            const response = await axios.post('http://localhost:5000/register', { nombre, dpi, email, contraseña });
            // Aquí puedes mostrar un mensaje de éxito si lo deseas
            alert('Registro exitoso, redirigiendo a inicio de sesión...');
            navigate('/login'); // Redirigir al inicio de sesión
        } catch (error) {
            // Manejo de errores
            alert(error.response?.data?.error || 'Error al registrar, intente de nuevo.');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Registro</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Nombre"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">DPI</label>
                    <input
                        type="text"
                        className="form-control"
                        value={dpi}
                        onChange={(e) => setDpi(e.target.value)}
                        placeholder="DPI"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        placeholder="Contraseña"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </div>
    );
};

export default Register;
