import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }
        setLoading(false);
    }, []);


    const auth = getAuth();
    const login = (email, password) => {
        //create session
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const loggedUser = {
                    id: userCredential.user.uid,
                    email,
                }
                console.log(userCredential);
                localStorage.setItem("user", JSON.stringify(loggedUser));
                setUser(loggedUser);
                navigate("/");
            })
            .catch((error) => {
                debugger;
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem('user');
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}