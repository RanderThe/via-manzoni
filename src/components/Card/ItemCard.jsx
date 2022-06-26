import React, { Component } from 'react';
import "./ItemCardStyle.css";
import deleteSVG from "../../assets/img/iconDelete.svg";
import { Row, Col, Card, Button, Image } from 'react-bootstrap';
import "../../assets/App.css";
import { Link } from 'react-router-dom';

class ItemCard extends Component {

    constructor(props) {
        super(props);
        const monthNames = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        this.monthName = monthNames[this.props.month];
    }

    deleteCard() {
        const cardIndex = this.props.cardIndex;
        this.props.deleteCard(cardIndex);
    };

    render() {
        return (
            <Row md={2} className="g-4">
                <Col id='colCardID' className='ItemCard'>
                    <Card className='CardItem'>
                        <Card.Header>
                            {this.monthName}-{this.props.year}
                            <Image className='imgTrash' type="button" alt="Deletar Card" src={deleteSVG}
                                onClick={this.deleteCard.bind(this)} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{this.props.year}-{this.props.month}</Card.Title>
                            <Card.Text>
                                {this.props.text}
                            </Card.Text>
                            <div className="centerButton">
                                <Link to={`../CardDetail/${this.props.month + '' + this.props.year}`}>
                                    <Button variant="primary">Ver relatório</Button>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default ItemCard;