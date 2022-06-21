import React, { Component } from 'react';
import "./ItemCardStyle.css";
import deleteSVG from "../../assets/img/iconDelete.svg";
import { Row, Col, Card, Button } from 'react-bootstrap';

class ItemCard extends Component {

    deleteCard(){
        const cardIndex = this.props.cardIndex;
        this.props.deleteCard(cardIndex);
    };

    render() {
        return (
            <Row md={2} className="g-4">
                <Col id='colCardID' className='ItemCard'>
                    <Card>
                        <Card.Header>
                            {this.props.title}
                            <img type="button" alt="Deletar Card" src={deleteSVG} 
                            onClick={this.deleteCard.bind(this)}/>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.text}
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