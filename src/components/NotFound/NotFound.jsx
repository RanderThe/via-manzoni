import React from 'react';
import "./NotFound.css";
import { Row, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <body className="TextNotFound body">
            <section className="notFound">
                <div>
                    <div className="TextNotFound text">
                        <h1>404</h1>
                        <h2>PAGE NOT FOUND</h2>
                        <h3>BACK TO HOME?</h3>
                        <div>
                            <Link to="/">
                                <Button style={{ "background-color": "#000000", "borderColor": "#fff", "margin": "10px" }} variant="primary">YES</Button>
                            </Link>
                            <Button href="https://www.youtube.com/watch?v=G3AfIvJBcGo" style={{ "background-color": "#000000", "borderColor": "#fff", "margin": "10px" }} variant="primary">NO</Button>
                        </div>
                    </div>
                    <Row>
                        <Image className="img" src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
                    </Row>
                    <Row>
                        <Image className="img" src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" />
                    </Row>

                </div>
            </section>
        </body>
    )
}
export default NotFound;