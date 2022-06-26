import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import React, { useState, useContext } from "react";
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import CardDetail from './pages/CardDetail/CardDetail';
import { AuthProvider, AuthContext } from "./context/authContext";

const AppRoutes = () => {

    const Private = ({ children }) => {
        const { authenticated,loading } = useContext(AuthContext);

        if(loading){
            return <div className="loading">Carregando...</div>
        }

        if (!authenticated) {
            return <Navigate to="/login"></Navigate>
        }
        return children;
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={
                        <Private>
                            <HomePage />
                        </Private>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cardDetail" element={
                        <Private>
                            <CardDetail />
                        </Private>} />
                    <Route
                        path="*"
                        element={
                            <NotFound />
                        }
                    />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;