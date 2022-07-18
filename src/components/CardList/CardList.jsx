import React from "react";
import ItemCard from "../Card/ItemCard";
import { Row, Col } from 'react-bootstrap';

const CardList = (props) => {
    debugger;
    if (props.cards) {
        return (
            <ul style={{ "marginTop": "10px" }}>
                <Row md={4} >
                    {props.cards.map((card, index) => (
                        <Col key={index}>
                            <li key={index}>
                                <ItemCard
                                    key={index}
                                    cardIndex={index}
                                    deleteCard={props.deleteCard}
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
    else {
        debugger;
        return (<p>nenhum card registrado</p>);
    }
}

export default CardList;