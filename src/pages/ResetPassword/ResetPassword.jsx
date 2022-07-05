import React, { Component, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";

export default function ResetPassword() {

    const [email, setEmail] = useState("");

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
            id="resetPassword"
            className="SignUp">

            <Form onSubmit={handleSubmit}>
            <h2 style={{"textAlign": "center",
                        "marginBottom": "20px"}}>Recuperar Senha</h2>
                <div className="mb-3">
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Informe o e-mail cadastrado:</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                </div>
                <div className="d-grid">
                    <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
                        Recuperar
                    </Button>
                </div>
                <p className="forgot-password text-right">
                    <Link to="/login"> Voltar para o Login !</Link>
                </p>
            </Form>
        </div>
    );
};