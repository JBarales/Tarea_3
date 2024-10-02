import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Register from './Register';
import Login from './Login';
import Home from './Home'; // Asegúrate de que el componente Home esté creado

import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap

const App = () => {
    return (
        <UserProvider>
            <Router>
                {/* Menú de Navegación */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Inicio</Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
                
                {/* Rutas */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    {/* Otras rutas */}
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;

