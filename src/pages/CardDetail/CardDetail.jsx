import React from 'react';
import { useParams } from 'react-router';

const CardDetail = () =>{

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