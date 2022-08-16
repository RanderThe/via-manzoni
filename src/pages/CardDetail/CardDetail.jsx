import React, { PureComponent, useState, useEffect, useContext, useReducer } from 'react';
import { useParams } from 'react-router';
import { Spinner, Row, Col, Form, Container } from "react-bootstrap";
import CardDetailRegistration from '../../components/CardDetailRegistration/CardDetailRegistration';
import AppNavBar from '../../components/AppNavBar/AppNavBar';
import { getDocByIDFirebase, postDoc, updtDoc } from '../../api/firebaseRepository';
import { AuthContext } from "../../context/authContext";
import "../../assets/App.css";
import {
    BarChart,
    Bar,
    Cell,
    Pie,
    PieChart,
    Line,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";
import DynamicTable from '../../components/Table/DynamicTable';
import Loading from '../../components/Loading/Loading';

const CardDetail = () => {

    const { id } = useParams();
    const [monthFinances, setMonthFinances] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingTable, setIsLoadingTable] = useState(true);
    const { user } = useContext(AuthContext);
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const getMonths = async () => {
        const monthFinance = await getDocByIDFirebase('monthFinances', id);
        setMonthFinances(monthFinance);
        setIsLoading(false);
    };

    useEffect(() => {
        if (!monthFinances) {
            getMonths();
        }
    }, [monthFinances]);

    const createItem = (object) => {
        debugger;
        setIsLoadingTable(true);
        if (!monthFinances) {
            postDoc("monthFinances", id, object).then(() => renderTable());
        }
        else {
            updtDoc("monthFinances", id, object).then(() => renderTable());
        }
        setIsLoadingTable(false);
        forceUpdate();
    }

    const deleteItem = (object, type) => {
        delete monthFinances[type][object];
        updtDoc("monthFinances", id, monthFinances);
        forceUpdate();
    }

    const renderTable = () => {
        var collectionHead = ['Descrição', 'Valor'];
        if (monthFinances) {
            debugger;
            return <div className='centerContent'>
                <Row>
                    <Col>
                        <Form>
                            <DynamicTable deleteItem={deleteItem.bind(this)} collectionData={monthFinances.expenses} title="Saídas" collectionHead={collectionHead} tableColor="#E3A4AD" type="expenses" />
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <DynamicTable deleteItem={deleteItem.bind(this)} collectionData={monthFinances.entries} title="Entradas" collectionHead={collectionHead} tableColor="#B2D9F0" type="entries" />
                        </Form>
                    </Col>
                </Row>
            </div>;
        } else {
            return <p className='centerContent'>Nenhum valor cadastrado para o mês!</p>;
        }
    }


    const renderCardDetailRegister = () => {
        if (user.autorization == 1) {
            return (<CardDetailRegistration createItem={createItem.bind(this)} cardData={monthFinances}></CardDetailRegistration>);
        }
    }

    return (
        isLoading ? <Loading msgLoading="Carregando finanças..." /> :
            (<section>
                <AppNavBar></AppNavBar>
                {renderCardDetailRegister()}
                {renderTable()}
            </section>
            ));
}

export default CardDetail;

