import React from "react";
import { Table } from "react-bootstrap";

const DynamicTable = (data) => {
    return (
        <section>
            <h2>{ data.title }</h2>
            <Table striped>
                <thead>
                    <tr>
                        {Object.keys(data.collectionHead).map((key, index) => (
                            <th>{data.collectionHead[index]}</th>
                        ))}
                    </tr>
                </thead>
                <tbody style={{ "background": data.tableColor }}>
                    {Object.keys(data.collectionData).map((key, index) => (
                        <tr key={index}>
                            <td>{key}</td>
                            <td>R${data.collectionData[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </section>
    )
}

export default DynamicTable;