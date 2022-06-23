import React from "react";
import { Component } from "react";
import ItemCard from "../Card/ItemCard";
import { Row, Col} from 'react-bootstrap';

class CardList extends Component {

    render() {
        return (
            <ul>
                <Row md={4} >
                    {this.props.cards.map((card, index) => (
                        <Col key={index}>
                            <li key={index}>
                                <ItemCard 
                                key={index}
                                cardIndex={index}
                                deleteCard={this.props.deleteCard}
                                year={card.year} 
                                month={card.month} 
                                text={card.text}></ItemCard>
                            </li>
                        </Col>
                    ))}
                </Row>
            </ul>
        );
    }
}

export default CardList;