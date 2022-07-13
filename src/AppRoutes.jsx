import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import React, { useContext } from "react";
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import CardDetail from './pages/CardDetail/CardDetail';
import Reports from "./pages/Reports/Reports";
import Receipts from "./pages/Receipts/Receipts";
import Charts from "./pages/Charts/Charts";
import { AuthProvider, AuthContext } from "./context/authContext";
import SignUp from "./pages/SignUp/SignUp";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

const AppRoutes = () => {

    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            debugger;
            console.log("passou no loading");
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
                        </Private>}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signUp" element={<SignUp/>}/>  
                    <Route path="/resetPassword" element={<ResetPassword/>}/>
                    <Route path="/cardDetail/:id" element={
                        <Private>
                            <CardDetail />
                        </Private>}
                    />
                    <Route path="/receipts" element={
                        <Private>
                            <Receipts />
                        </Private>}
                    />
                    <Route path="/charts" element={
                        <Private>
                            <Charts />
                        </Private>}
                    />
                    <Route path="reports" element={
                        <Private>
                            <Reports />
                        </Private>}
                    />
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