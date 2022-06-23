import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Component, useRef } from "react";
import { Form, Button, InputGroup } from "react-bootstrap"
import "./CardRegistrationStyle.css";
import "../../assets/App.css";

class CardRegistration extends Component {

    constructor(props) {
        super(props);
        this.text = "";
        this.year = "";
        this.month = "";
        this.years = Array.from(new Array(20), (val, index) => index + 2010);
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth() + 1;
    }

    //_  =  private

    _handlerTextChange(event) {
        this.text = event.target.value;
    }

    _handlerMonthChange(event) {
        this.month = event.target.value;
    }

    _handlerYearChange(event) {
        this.year = event.target.value;
    }

    _createCard(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createCard(this.year,this.month, this.text);
        event.target.reset();
    }

    render() {
        return (
            <div style={{"margin": "10px"}} className="CardRegistration">
                <Form  onSubmit={this._createCard.bind(this)}>
                    <Form.Text>Cadastrar um novo mês</Form.Text>
                    <Form.Select
                        onChange={this._handlerMonthChange.bind(this)}
                        defaultValue={this.month}>
                        <option>Mês</option>
                        <option value='1'>Janeiro</option>
                        <option value='2'>Fevereiro</option>
                        <option value='3'>Março</option>
                        <option value='4'>Abril</option>
                        <option value='5'>Maio</option>
                        <option value='6'>Junho</option>
                        <option value='7'>Julho</option>
                        <option value='8'>Agosto</option>
                        <option value='9'>Setembro</option>
                        <option value='10'>Outubro</option>
                        <option value='11'>Novembro</option>
                        <option value='12'>Dezembro</option>
                    </Form.Select>

                    <Form.Select
                        onChange={this._handlerYearChange.bind(this)}
                        defaultValue={this.year}>
                        {
                            this.years.map((year, index) => {
                                return <option key={`year${index}`} value={year}>{year}</option>
                            })
                        }
                    </Form.Select>
                    <Form.Text>Gostaria de relatar algum fato relevante ?</Form.Text>
                    <Form.Group size="lg">
                        <Form.Control type="text" placeholder="Escreva sua nota..." onChange={this._handlerTextChange.bind(this)} />
                    </Form.Group>
                    <div className="centerButton">
                        <Button type="submit">Criar Mês</Button>
                    </div>
                </Form>
            </div >
        );
    }
}

export default CardRegistration;