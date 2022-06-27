import React, { useState, useContext } from 'react';
import CardList from "../../components/CardList/CardList";
import CardRegistration from "../../components/CardRegistration/CardRegistration";
import "../../assets/App.css";
import '../../assets/index.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { AuthContext } from "../../context/authContext";


const HomePage = () => {

  const [cards, setCards] = useState([]);
  const { authenticated, logout } = useContext(AuthContext);

  const handleLogout = () => logout();

  const createCard = (year, month, text) => {
    const newCard = { year, month, text };
    setCards([...cards, newCard]);
  };

  const deleteCard = (indexCard) => {
    const arrayCards = cards;
    arrayCards.splice(indexCard, 1);
    setCards([...arrayCards])
  };

  return (
    <section>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand style={{ "fontFamily": "GreatVibes", "fontSize": "30px" }} href="#">Via Manzoni</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Comprovantes</Nav.Link>
              <Nav.Link href="#action2">Votações</Nav.Link>
              <Nav.Link href="#action2">Obras</Nav.Link>
              <Nav.Link href="#" disabled>
                Gráficos(Em Construção)
              </Nav.Link>
            </Nav>
            <Button onClick={() => { handleLogout() }} variant="outline-warning">Sair</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <CardRegistration createCard={createCard.bind(this)}></CardRegistration>
      <CardList deleteCard={deleteCard.bind(this)} cards={cards}></CardList>
    </section>
  );
}


export default HomePage;