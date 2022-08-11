import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap"
import "./CardDetailRegistrationStyle.css";

const CardDetailRegistration = (props) => {

    const [valueWater, setValueWater] = useState("");
    const [valueEnergy, setValueEnergy] = useState("");
    const [valueCondo, setValueCondo] = useState("");
    const [descExtra, setDescExtra] = useState("")
    const [valueExtra, setValueExtra] = useState("");
    const [descEntry, setDescEntry] = useState("")
    const [valueEntry, setValueEntry] = useState("");

    const _createUsualExpense = (event) => {
        event.preventDefault();
        event.stopPropagation();
        debugger;
        if (!props.cardData) {
            var object = _createItemStructure();

            object.expenses["Condomínio Externo"] = valueCondo || object.expenses["Condomínio Externo"];
            object.expenses.Energia = valueEnergy || object.expenses.Energia;
            object.expenses["Água"] = valueWater || object.expenses["Água"];
            _createItem(object);
        }
        else {
            props.cardData.expenses["Condomínio Externo"] = valueCondo || props.cardData.expenses["Condomínio Externo"];
            props.cardData.expenses.Energia = valueEnergy || props.cardData.expenses.Energia;
            props.cardData.expenses["Água"] = valueWater || props.cardData.expenses["Água"];
            _createItem(props.cardData);
        }
        event.target.reset();
    };

    const _createUnusualExpense = (event) => {
        event.preventDefault();
        event.stopPropagation();

        var newExpense = {
            [descExtra]: valueExtra
        };
        if (!props.cardData) {
            var object = _createItemStructure();
            object.expenses = Object.assign(object.expenses, newExpense);
            _createItem(object);
        }
        else {
            props.cardData.expenses = Object.assign(props.cardData.expenses, newExpense);
            _createItem(object);
        }
        event.target.reset();
    };

    const _createEntry = (event) => {
        event.preventDefault();
        event.stopPropagation();

        var newEntry = {
            [descEntry]: valueEntry
        };

        if (!props.cardData) {
            var object = _createItemStructure();
            object.entries = Object.assign(object.entries, newEntry);
            _createItem(object);
        }
        else {
            var object = props.cardData;
            object.entries = Object.assign(object.entries, newEntry);
            _createItem(object);
        }
        event.target.reset();
    };



    const _createItemStructure = () => {
        var object = {
            entries: { "Condomínio": 0 },
            expenses: {
                "Condomínio Externo": 0,
                "Água": 0,
                "Energia": 0
            }
        };

        return object;
    };

    const _createItem = (object) => {
        props.createItem(object);
    };

    return (
        <div className="CardDetailRegistration" >
            <Container style={{ "maxWidth": "max-content" }}>
                <Row>
                    <Col>
                        <Form onSubmit={_createUsualExpense.bind(this)}>
                            <Form.Label>Despesas Recorrentes:</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Text>Água:</Form.Text>
                                    <Form.Group size="lg">
                                        <Form.Control type="number" min="0.00" max="10000.00" step="0.01" placeholder="Valor"
                                            value={valueWater}
                                            onChange={(e) => setValueWater(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Text>Energia:</Form.Text>
                                    <Form.Group size="lg">
                                        <Form.Control type="number" min="0.00" max="10000.00" step="0.01" placeholder="Valor"
                                            value={valueEnergy}
                                            onChange={(e) => setValueEnergy(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Text>Cond. externo:</Form.Text>
                                    <Form.Group size="lg">
                                        <Form.Control type="number" min="0.00" max="10000.00" step="0.01" placeholder="Valor"
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
                                        <Form.Control type="text" placeholder="Desc. Despesa"
                                            value={descExtra}
                                            onChange={(e) => setDescExtra(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Text>Valor:</Form.Text>
                                    <Form.Group size="lg">
                                        <Form.Control type="number" min="0.00" max="10000.00" step="0.01" placeholder="Valor"
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
                    <Col>
                        <Form onSubmit={_createEntry.bind(this)}>
                            <Form.Label>Entrada de dinheiro:</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Text>Descrição:</Form.Text>
                                    <Form.Group size="lg">
                                        <Form.Control type="text" placeholder="Descrição"
                                            value={descEntry}
                                            onChange={(e) => setDescEntry(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Text>Valor:</Form.Text>
                                    <Form.Group size="lg">
                                        <Form.Control type="number" min="0.00" max="10000.00" step="0.01" placeholder="Valor"
                                            value={valueEntry}
                                            onChange={(e) => setValueEntry(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <div className="centerButton">
                                    <Button type="submit">Registrar Entrada</Button>
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