import React, { Component, useState, useContext } from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";

export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }

    function validateForm() {
        return true;
    }

    return (
        <div style={{
            "paddingRight": "20px",
            "paddingLeft": "20px"
        }}
            id="signUp"
            className="SignUp">

            <Form onSubmit={handleSubmit}>
            <h2 style={{"textAlign": "center",
                        "marginBottom": "20px"}}>Registrar</h2>
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