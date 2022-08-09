import React from "react";
import { Spinner } from "react-bootstrap";
import AppNavBar from '../../components/AppNavBar/AppNavBar';

const Loading = (data) => {
    return (
        <section className='centerContent'>
            <AppNavBar></AppNavBar>
            <div style={{
                "marginTop": "10%"
            }}>
            <Spinner animation="border" role="status"/>
            </div>
            <span>{data.msgLoading}</span>
        </section >
    );
}

export default Loading;