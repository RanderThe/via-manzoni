import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Link } from 'react-router-dom';

export default function Login() {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit", { email, password });
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="d-grid">
          <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
            Entrar
          </Button>
        </div>
        <p className="forgot-password text-right">Esqueceu sua senha ?
          <Link to="/resetPassword"> Recupere aqui!</Link>
        </p>
        <p style={{"marginBottom": "20px",}} className="forgot-password text-right">Não tem cadastro ?
          <Link to="/signUp"> Cadastre-se aqui!</Link>
        </p>
      </Form>
    </div>
  );
}