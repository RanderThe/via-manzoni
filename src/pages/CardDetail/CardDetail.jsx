import React, { PureComponent } from 'react';
import { useParams } from 'react-router';
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


    const data2 = [
        { name: 'Group A', value: 30 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };



    const styles = {
        fontFamily: "sans-serif",
        textAlign: "center"
    };

    const data = [];

    const rand = 300;
    for (let i = 0; i < 7; i++) {
        let d = {
            year: 2000 + i,
            value: Math.random() * (rand + 50) + 100
        };

        data.push(d);
    }

    const { id } = useParams();

    return (
        <div >
            <div style={{
                "height": "200px",
                "width": "100%"
            }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
                        <XAxis dataKey="year" />
                        <YAxis />
                    </LineChart>
                </ResponsiveContainer>

                <div style={{
                    "height": "300px",
                    "width": "100%"
                }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data2}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}


export default CardDetail;

