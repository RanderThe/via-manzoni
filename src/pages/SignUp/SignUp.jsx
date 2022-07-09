import React, { Component, useState, useContext } from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';
import { Alert, Button, Form } from "react-bootstrap";
import { AuthContext } from '../../context/authContext';

export default function SignUp() {

    const { msgAuth, register, msgRegister } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [apartment, setApartment] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        register(email, password, name, apartment);
    }

    function validateForm() {
        return email.length > 0 && password.length > 0 && password === confirmPassword;
    }

    return (
        <div style={{
            "paddingRight": "20px",
            "paddingLeft": "20px"
        }}
            id="signUp"
            className="SignUp">

            <Form onSubmit={handleSubmit}>
                <h2 style={{
                    "textAlign": "center",
                    "marginBottom": "20px"
                }}>Registrar</h2>
                <div className="mb-3">
                    <Form.Group size="lg" controlId="name">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                </div>
                <div className="mb-3">
                    <Form.Group size="lg" controlId="apartment">
                        <Form.Label>Apartamento</Form.Label>
                        <Form.Select
                            onChange={(e) => setApartment(e.target.value)}
                            defaultValue='0'>
                            <option value='0'>Número</option>
                            <option value='107'>107</option>
                            <option value='108'>108</option>
                            <option value='109'>109</option>
                            <option value='207'>207</option>
                            <option value='208'>208</option>
                            <option value='209'>209</option>
                            <option value='307'>307</option>
                            <option value='308'>308</option>
                            <option value='309'>309</option>
                            <option value='407'>407</option>
                            <option value='408'>408</option>
                            <option value='409'>409</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className="mb-3">
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                </div>
                <div className="mb-3">
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                </div>
                <div className="mb-3">
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Repita a senha</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setconfirmPassword(e.target.value)}
                        />
                    </Form.Group>
                </div>
                <Alert show={msgRegister} variant="danger">
                    {msgRegister}
                </Alert>
                <div className="d-grid">
                    <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
                        Registrar
                    </Button>
                </div>
                <p className="forgot-password text-right">Já possui cadastro ?
                    <Link to="/login"> Entrar!</Link>
                </p>
            </Form>
        </div>
    );
}