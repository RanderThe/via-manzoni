import React, { Component } from 'react';
import "./ItemCardStyle.css";
import {Row,Col, Card, Button } from 'react-bootstrap';

class ItemCard extends Component {

    render() {
        return (
            <Row md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default ItemCard;