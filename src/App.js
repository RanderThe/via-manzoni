import React, { Component } from "react";
import CardList from "./components/CardList/CardList";
import CardRegistration from "./components/CardRegistration/CardRegistration";
import { Container, Row, Button, Navbar, NavDropdown, Nav, Form, FormControl, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  createCard(title,text){
    console.log("um novo card foi criado "+title + text);
  }


  render() {
    return (
      <section>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Via Manzoni</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Votações</Nav.Link>
                <Nav.Link href="#action2">Obras</Nav.Link>
                <Nav.Link href="#" disabled>
                  Gráficos(Em Construção)
                </Nav.Link>
              </Nav>

              <Button variant="outline-warning">Sair</Button>

            </Navbar.Collapse>
          </Container>
        </Navbar>

        <CardRegistration createCard={this.createCard}></CardRegistration>
        <CardList></CardList>




      </section>
    );
  }
}

export default App;
