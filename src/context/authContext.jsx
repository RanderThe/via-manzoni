import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword } from "firebase/auth";
import { writeUserData, getDocByIDFirebase } from '../api/firebaseRepository';
import { doc, setDoc } from "firebase/firestore";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseConfig from "../api/firebaseConfig";
import { initializeApp } from 'firebase/app';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [msgAuth, setMsgAuth] = useState(null);
    const [msgResetPassStatus, setMsgResetPassStatus] = useState(null);
    const [msgResetPass, setMsgResetPass] = useState(null);
    const [msgRegister, setMsgRegister] = useState(null);

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

                debugger;

                getDocByIDFirebase("users", userCredential.user.uid)
                    .then(userSave => {
                        // Signed in 
                        const loggedUser = {
                            id: userCredential.user.uid,
                            email,
                            name: userSave.name,
                            apartment: userSave.apartment
                        };

                        console.log(loggedUser);
                        localStorage.setItem("user", JSON.stringify(loggedUser));
                        setUser(loggedUser);
                        debugger;
                        if (loggedUser.apartment != "107") {
                            navigate("/");
                        }
                        cleanAllMsgs();
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setMsgAuth(errorMessage);
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
                debugger;
                const user = userCredential.user;
                setMsgRegister("Usuario criado : " + user.email);
                const app = initializeApp(firebaseConfig);
                const db = getFirestore(app);
                const resultdo = setDoc(doc(db, "users", user.uid), {
                    name: name,
                    email: email,
                    apartment: apartament
                }).catch((error) => {
                    setMsgRegister(error);
                });

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setMsgRegister(errorMessage);
                // ..
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
            value={{ authenticated: !!user, user, login, logout, resetPassword, register, loading, msgAuth, msgRegister, msgResetPassStatus, msgResetPass }}>
            {children}
        </AuthContext.Provider>
    )
}