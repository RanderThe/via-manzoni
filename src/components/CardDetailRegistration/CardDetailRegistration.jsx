import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap"
import "./CardDetailRegistrationStyle.css";

const CardDetailRegistration = () => {

    const [valueWater, setValueWater] = useState("");
    const [valueEnergy, setValueEnergy] = useState("");
    const [valueCondo, setValueCondo] = useState("");
    const [descExtra, setDescExtra] = useState("")
    const [valueExtra, setValueExtra] = useState("");


    const _createUsualExpense = (event) => {


        console.log("entrou no create");
    }

    const _createUnusualExpense = (event) => {
        console.log("entrou no create");
    }


    return (
        <div style={{ "margin": "10px" }} className="CardDetailRegistration" >
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={_createUsualExpense.bind(this)}>
                            <Form.Label>Despesas Recorrentes:</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Text>Água:</Form.Text>
                                    <Form.Group size="lg">
                                        <Form.Control type="number" min="0.00" max="10000.00" step="0.01" placeholder="Escreva sua nota..."
                                            value={valueWater}
                                            onChange={(e) => setValueWater(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Text>Energia:</Form.Text>
                                    <Form.Group size="lg">
                                        <Form.Control type="number" min="0.00" max="10000.00" step="0.01" placeholder="Escreva sua nota..."
                                            value={valueEnergy}
                                            onChange={(e) => setValueEnergy(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Text>Condomínio externo:</Form.Text>
                                    <Form.Group size="lg">
                                        <Form.Control type="number" min="0.00" max="10000.00" step="0.01" placeholder="Escreva sua nota..."
                                            value={valueCondo}
                                            onChange={(e) => setValueCondo(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <div className="centerButton">
                                    <Button type="submit">Registrar Despesas</Button>
                                </div>
                            </Row>
                        </Form>
                    </Col>
                    <Col>
                        <Form onSubmit={_createUnusualExpense.bind(this)}>
                            <Form.Label>Despesas eventuais:</Form.Label>
                            <Row>
                                <Col>

                                    <Form.Text>Descrição:</Form.Text>
                                    <Form.Group size="lg">
                                        <Form.Control type="number" min="0.00" max="10000.00" step="0.01" placeholder="Escreva sua nota..."
                                            value={descExtra}
                                            onChange={(e) => setDescExtra(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Text>Valor:</Form.Text>
                                    <Form.Group size="lg">
                                        <Form.Control type="number" min="0.00" max="10000.00" step="0.01" placeholder="Escreva sua nota..."
                                            value={valueExtra}
                                            onChange={(e) => setValueExtra(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <div className="centerButton">
                                    <Button type="submit">Registrar Despesa</Button>
                                </div>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default CardDetailRegistration;