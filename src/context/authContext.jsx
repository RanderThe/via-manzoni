import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword   } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [msgAuthStatus, setMsgAuthStatus] = useState(null);

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
                const errorCode = error.code;
                const errorMessage = error.message;
                setMsgAuthStatus(errorMessage);
                console.log(errorMessage);
            });
    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem('user');
        setUser(null);
        navigate("/login");
    };

    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                setMsgAuthStatus("Um e-mail foi enviado com a recuperação da senha");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setMsgAuthStatus(errorMessage);
                // ..
            });
    };

    const register = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setMsgAuthStatus("Usuario criado : " + user.email);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMsgAuthStatus(errorMessage);
          // ..
        });
    };

    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, login, logout, resetPassword, register, loading, msgAuthStatus }}>
            {children}
        </AuthContext.Provider>
    )
}