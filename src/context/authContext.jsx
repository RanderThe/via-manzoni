import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword } from "firebase/auth";
import { getDocByIDFirebase } from '../api/firebaseRepository';
import { doc, setDoc, getFirestore } from "firebase/firestore";
import firebaseConfig from "../api/firebaseConfig";
import { initializeApp } from 'firebase/app';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [msgAuth, setMsgAuth] = useState(null);
    const [msgResetPassStatus, setMsgResetPassStatus] = useState(null);
    const [msgResetPass, setMsgResetPass] = useState(null);
    const [msgRegister, setMsgRegister] = useState(null);
    const [alertVariant, setAlertVariant] = useState();

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
                setIsLoading(true);
                getDocByIDFirebase("users", userCredential.user.uid)
                    .then(userSave => {
                        // Signed in 
                        const loggedUser = {
                            id: userCredential.user.uid,
                            email,
                            name: userSave.name,
                            apartment: userSave.apartment,
                            autorization: userSave.autorization
                        };

                        localStorage.setItem("user", JSON.stringify(loggedUser));
                        setUser(loggedUser);
                        if (loggedUser.autorization === 0 || loggedUser.autorization === 'undefined') {
                            setMsgAuth("Seu usuário ainda não foi válidado pelo síndico!");
                            setAlertVariant("warning");
                        }
                        else{
                            navigate("/");
                            cleanAllMsgs();
                        }
                        setIsLoading(false);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setMsgAuth(errorMessage);
                setAlertVariant("danger");
            });
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate("/login");
    };

    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setMsgResetPass("Um e-mail foi enviado com a recuperação da senha. Verifique também na caixa de SPAM e Lixeira");
                setMsgResetPassStatus("success");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setMsgResetPass(errorMessage);
                setMsgResetPassStatus("danger");
                // ..
            });
    };

    const register = (email, password, name, apartament) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setMsgRegister("Usuario criado : " + user.email);
                const app = initializeApp(firebaseConfig);
                const db = getFirestore(app);
                const resultado = setDoc(doc(db, "users", user.uid), {
                    name: name,
                    email: email,
                    apartment: apartament,
                    autorization: "0"
                }).catch((error) => {
                    setMsgRegister(error);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setMsgRegister(errorMessage);
            });
    };

    const cleanAllMsgs = () => {
        setMsgAuth(null);
        setMsgResetPass(null);
        setMsgRegister(null);
        setMsgResetPassStatus(null);
    };

    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, login,isLoading, logout, resetPassword, register, loading, msgAuth, msgRegister, msgResetPassStatus, msgResetPass, alertVariant }}>
            {children}
        </AuthContext.Provider>
    )
}