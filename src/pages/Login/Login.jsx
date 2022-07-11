import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import "./Login.css";
import { Link } from 'react-router-dom';

export default function Login() {
  const { isLoading, login, msgAuth, alertVariant } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    debugger;
    event.preventDefault();
    login(email, password);
  }


  return (
    <div style={{
      "paddingRight": "20px",
      "paddingLeft": "20px"
    }}
      id="login"
      className="Login">
      <h2 className="font-face-gm">Via Manzoni</h2>
      <Form onSubmit={handleSubmit}>
        <div className="mb-3">
          <Form.Group size="lg" controlId="email">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              disabled={isLoading}
              autoFocus
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
              disabled={isLoading}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </div>
        <div style={{
          "justifyContent": "center",
          "textAlign": "center",
          "alignItems": "center"
        }}>
          <Alert show={msgAuth} variant={alertVariant}>
            {msgAuth}
          </Alert>
          {isLoading ?
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner> : null}
        </div>
        <div className="d-grid">
          <Button block="true" size="lg" type="submit" disabled={!validateForm() || isLoading}>
            Entrar
          </Button>
        </div>
        <p className="forgot-password text-right">Esqueceu sua senha ?
          <Link to="/resetPassword"> Recupere aqui!</Link>
        </p>
        <p style={{ "marginBottom": "20px", }} className="forgot-password text-right">Não tem cadastro ?
          <Link to="/signUp"> Cadastre-se aqui!</Link>
        </p>
      </Form>
    </div>
  );
}