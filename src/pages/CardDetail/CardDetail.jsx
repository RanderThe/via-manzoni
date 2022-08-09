import React, { PureComponent, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { Spinner, Row, Col, Form, Container } from "react-bootstrap";
import CardDetailRegistration from '../../components/CardDetailRegistration/CardDetailRegistration';
import AppNavBar from '../../components/AppNavBar/AppNavBar';
import { getDocByIDFirebase } from '../../api/firebaseRepository';
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
    const { user } = useContext(AuthContext);

    const getMonths = async () => {
        const monthList = await getDocByIDFirebase('monthFinances', id);
        setMonthFinances(monthList);
        setIsLoading(false);
    };

    useEffect(() => {
        if (!monthFinances) {
            getMonths();
        }
    }, []);

    const renderTable = () => {
        var collectionHead = ['Descrição', 'Valor'];
        if (monthFinances) {
            return <div className='centerContent'>

                <Row >
                    <Col>
                        <Container>
                            <Form>
                                <DynamicTable collectionData={monthFinances.expenses} title="Saídas" collectionHead={collectionHead} tableColor="#E3A4AD" />
                            </Form>
                        </Container>
                    </Col>
                    <Col>
                        <Form>
                            <DynamicTable collectionData={monthFinances.entries} title="Entradas" collectionHead={collectionHead} tableColor="#B2D9F0" />
                        </Form>
                    </Col>
                </Row>

            </div>;
        } else {
            return <p className='centerContent'>Nenhum valor cadastrado para o mês!</p>;
        }
    }

    const renderCardDetailRegister = () => {
        debugger;
        if (user.autorization == 1) {
            return (<CardDetailRegistration></CardDetailRegistration>);
        }
    }

    if (isLoading) {
        return (
            <Loading msgLoading="Carregando finanças..." />
        );
    }
    else {
        return (
            <section>
                <AppNavBar></AppNavBar>
                {renderCardDetailRegister()}
                {renderTable()}
            </section>
        );
    }
}


export default CardDetail;

