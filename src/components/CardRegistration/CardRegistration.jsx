import React from "react";
import { Component } from "react";
import { Form, Button } from "react-bootstrap"
import "./CardRegistrationStyle.css";

class CardRegistration extends Component {

    constructor(props) {
        super(props);
        this.title = "";
        this.text = "";
    }

    //_  =  private
    _handlerTitleChange(event) {
        this.title = event.target.value;
    }

    _handlerTextChange(event) {
        this.text = event.target.value;
    }

    _createCard(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createCard(this.title,this.text);
    }

    render() {
        return (
            <div className="CardRegistration">
                <Form onSubmit={this._createCard.bind(this)}>
                    <Form.Group size="lg">
                        <Form.Control type="text" placeholder="Titulo" onChange={this._handlerTitleChange.bind(this)} />
                    </Form.Group>
                    <Form.Group size="lg">
                        <Form.Control type="text" placeholder="Escreva sua nota..." onChange={this._handlerTextChange.bind(this)} />
                    </Form.Group>
                    <Button type="submit">Criar Nota</Button>
                </Form>
            </div >
        );
    }
}

export default CardRegistration;