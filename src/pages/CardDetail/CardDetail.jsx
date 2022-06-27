import React, {useEffect,useState } from 'react';
import { useParams } from 'react-router';

const CardDetail = () =>{

    debugger;
    const{id}=useParams();

    return (
        <main>
            <article>
                <h2> ID encontrado{id}</h2>
            </article>
        </main>
    );
}

export default CardDetail;