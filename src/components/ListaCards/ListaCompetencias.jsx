import React from "react";
import { Component } from "react";
import CardCompetencia from "../Card/ItemCard";
import {Row,Col, Card, Button } from 'react-bootstrap';

class ListaCompetencias extends Component {

    render() {
        return (
            <ul>
                <Row md={2} className="g-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                    <Col>
                        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
                            return (
                                <li key={index}>
                                    <div>{categoria}</div>
                                    <CardCompetencia></CardCompetencia>
                                </li>);
                        })}
                    </Col>
                    ))}
                </Row>
            </ul>
        );
    }
}

export default ListaCompetencias;