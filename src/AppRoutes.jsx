import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import React from "react";
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import CardDetail from './pages/CardDetail/CardDetail';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="*"
                    element={
                        <NotFound />
                    }
                />
            </Routes>
        </Router>
    )
}

export default AppRoutes;