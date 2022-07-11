import React from "react";
import { Form, Button } from "react-bootstrap"
import "./CardRegistrationStyle.css";
import "../../assets/App.css";

const CardRegistration = (props) => {

    let text = "";
    let year = "";
    let month = "";

    const years = Array.from(new Array(20), (val, index) => index + 2010);
    year = new Date().getFullYear();
    month = new Date().getMonth() + 1;

    //_  =  private

    const _handlerTextChange = (event) => {
        text = event.target.value;
    }

    const _handlerMonthChange = (event) => {
        month = event.target.value;
    }

    const _handlerYearChange = (event) => {
        year = event.target.value;
    }

    const _createCard = (event) => {
        event.preventDefault();
        event.stopPropagation();
        debugger;
        props.createCard(year, month, text);
        event.target.reset();
        month = new Date().getMonth() + 1;
    }

    return (
        <div style={{ "margin": "10px" }} className="CardRegistration">
            <Form onSubmit={_createCard.bind(this)}>
                <Form.Text>Cadastrar um novo mês</Form.Text>
                <Form.Select
                    onChange={_handlerMonthChange.bind(this)}
                    defaultValue={month}>
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
                    onChange={_handlerYearChange.bind(this)}
                    defaultValue={year}>
                    {
                        years.map((year, index) => {
                            return <option key={`year${index}`} value={year}>{year}</option>
                        })
                    }
                </Form.Select>
                <Form.Text>Gostaria de relatar algum fato relevante ?</Form.Text>
                <Form.Group size="lg">
                    <Form.Control type="text" placeholder="Escreva sua nota..." onChange={_handlerTextChange.bind(this)} />
                </Form.Group>
                <div className="centerButton">
                    <Button type="submit">Criar Mês</Button>
                </div>
            </Form>
        </div >
    );
}

export default CardRegistration;