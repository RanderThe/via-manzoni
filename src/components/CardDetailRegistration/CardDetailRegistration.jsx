import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap"

const CardDetailRegistration = () => {

    const [agua, setAgua] = useState("");

    const _handlerAguaChange = (event) => {
        debugger;
        setAgua(event);
    }
    const _createCard = (event) => {

    }

    return (
        <div style={{ "margin": "10px" }} >
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={_createCard.bind(this)}>
                            <Form.Text>Valor conta de Água:</Form.Text>
                            <Form.Group size="lg">
                                <Form.Control type="number" min="0.00" max="10000.00" step="0.01" placeholder="Escreva sua nota..."
                                    value={agua}
                                    onChange={(e) => _handlerAguaChange(e.target.value)} />
                            </Form.Group>

                            <div >
                                <Button type="submit">Criar Mês</Button>
                            </div>
                        </Form>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default CardDetailRegistration;