import React from "react";
import { Component } from "react";
import ItemCard from "../Card/ItemCard";
import { Row, Col, Card, Button } from 'react-bootstrap';

class CardList extends Component {

    render() {
        return (
            <ul>
                <Row md={4} >
                    {this.props.cards.map((card, index) => (
                        <Col>
                            <li key={index}>
                                <ItemCard title={card.title} text={card.text}></ItemCard>
                            </li>
                        </Col>
                    ))}
                </Row>
            </ul>
        );
    }
}

export default CardList;