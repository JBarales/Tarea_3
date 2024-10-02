// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from './UserContext'; // Importar el contexto del usuario

const Home = () => {
    const { user, logout } = useUser(); // Obtener el usuario del contexto

    return (
        <div className="container mt-5 text-center">
            <h1>Bienvenido a la tarea 3</h1>
            {user ? (
                <div>
                    <h2>Hola, {user.nombre}!</h2> {/* Mostrar nombre del usuario si está logueado */}
                    <button className="btn btn-danger" onClick={logout}>
                        Cerrar Sesión
                    </button>
                </div>
            ) : (
                <h2>Inicia sesión o regístrate para continuar</h2>
            )}
            {!user && (
                <div className="mt-4">
                    <Link to="/Login" className="btn btn-primary me-2">Iniciar Sesión</Link>
                    <Link to="/Register" className="btn btn-secondary">Registrar</Link>
                </div>
            )}
        </div>
    );
};

export default Home;
