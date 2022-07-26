import React, { PureComponent } from 'react';
import { useParams } from 'react-router';
import Table from 'react-bootstrap/Table';
import CardDetailRegistration from '../../components/CardDetailRegistration/CardDetailRegistration';
import AppNavBar from '../../components/AppNavBar/AppNavBar';
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

    return (
        <section>
            <AppNavBar></AppNavBar>
            <CardDetailRegistration></CardDetailRegistration>
            <div >
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>\\
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.cards.map((card, index) => (
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </section>
    );
}


export default CardDetail;

