import React, { PureComponent, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Table from 'react-bootstrap/Table';
import { Spinner } from "react-bootstrap";
import CardDetailRegistration from '../../components/CardDetailRegistration/CardDetailRegistration';
import AppNavBar from '../../components/AppNavBar/AppNavBar';
import { getDocByIDFirebase } from '../../api/firebaseRepository';
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

const CardDetail = () => {

    const { id } = useParams();
    const [monthFinances, setMonthFinances] = useState();

    const getMonths = async () => {
        const monthList = await getDocByIDFirebase('monthFinances', id);
        debugger;
        setMonthFinances(monthList);
        console.log(monthFinances);
    };

    useEffect(() => {
        debugger;
        if (!monthFinances) {
            getMonths();
        }
    }, []);


    if (!monthFinances) {
        return (
            <section style={{
                "justifyContent": "center",
                "textAlign": "center",
                "alignItems": "center",
            }}>
                <AppNavBar></AppNavBar>
                <div style={{
                    "marginTop": "10%"
                }}>
                    {!monthFinances ?
                        <Spinner animation="border" role="status">
                        </Spinner> : null}
                </div>
                <span >Carregando meses...</span>
            </section >
        );
    }
    else {
        return (
            <section>
                <AppNavBar></AppNavBar>
                <CardDetailRegistration></CardDetailRegistration>
                <div >
                    {<Table striped>
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(monthFinances.expenses).map((key, index) => (

                                <tr key={index}>
                                    <td>{key}</td>
                                    <td>{monthFinances.expenses[key]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>}
                </div>
            </section>
        );
    }


}


export default CardDetail;

