import React, { useContext }  from "react";
import { Table } from "react-bootstrap";
import { Image } from 'react-bootstrap';
import deleteSVG from "../../assets/img/iconDelete.svg";
import { AuthContext } from "../../context/authContext";
import "../../assets/App.css";

const DynamicTable = (props) => {
    const { user } = useContext(AuthContext);

    const _deleteCard = (data,type) => {
        if(data!="Energia" && data!="Água" && data!= "Condomínio Externo" && data!="Condomínio"){
            props.deleteItem(data,type);
        }
        else{
            alert("Você não pode deletar um valor recorrente!");
        }

    };

    return (
        <section>
            <h2>{props.title}</h2>
            <Table striped>
                <thead>
                    <tr>
                        {Object.keys(props.collectionHead).map((key, index) => (
                            <th key={key}>{props.collectionHead[index]}</th>
                        ))}
                        <th hidden={user.autorization != 1}>
                            X
                        </th>
                    </tr>
                </thead>
                <tbody style={{ "background": props.tableColor }}>
                    {Object.keys(props.collectionData).map((key, index) => (
                        <tr key={index}>
                            <td>{key}</td>
                            <td>R${props.collectionData[key]}</td>
                            <td>
                                <Image hidden={user.autorization != 1} className='imgDelete' 
                                type="button" alt="Deletar Card" src={deleteSVG}
                                onClick={() =>_deleteCard(key,props.type)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </section>
    )
}

export default DynamicTable;