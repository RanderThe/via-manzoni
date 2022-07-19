import React, { useContext } from 'react';
import "./ItemCardStyle.css";
import deleteSVG from "../../assets/img/iconDelete.svg";
import { Row, Col, Card, Button, Image } from 'react-bootstrap';
import "../../assets/App.css";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/authContext";

const ItemCard = (props) => {
    const { user } = useContext(AuthContext);

    const monthNames = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const monthName = monthNames[props.month];

    const deleteCard = () => {
        const cardIndex = props.cardIndex;
        props.deleteCard(cardIndex);
    };

    return (
        <Row md={2} className="g-4">
            <Col id='colCardID' className='ItemCard'>
                <Card className='CardItem'>
                    <Card.Header>
                        {monthName}-{props.year}
                        <Image hidden={user.autorization != 1} className='imgTrash' type="button" alt="Deletar Card" src={deleteSVG}
                            onClick={deleteCard.bind(this)} />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{props.year}-{props.month}</Card.Title>
                        <Card.Text ellipsizeMode='tail'>
                            {`${props.text.substring(50, props.text)}...`}
                        </Card.Text>
                        <div className="centerButton">
                            <Link to={`../CardDetail/${props.month + '' + props.year}`}>
                                <Button variant="primary">Ver relatório</Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default ItemCard;