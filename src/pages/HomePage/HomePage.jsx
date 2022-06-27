import React, { Component, useContext } from 'react';
import CardList from "../../components/CardList/CardList";
import CardRegistration from "../../components/CardRegistration/CardRegistration";
import "../../assets/App.css";
import '../../assets/index.css';
import { Navbar, Container, Nav, Button, Image } from 'react-bootstrap';
import { AuthContext } from "../../context/authContext";


class HomePage extends Component {

  constructor(props) {
    super();
    this.state = {
      cards: []
    };
    const {authenticated,logout} = useContext(AuthContext);
    /*const handleLogout=()=>{
      logout();
    };*/
  }

  handleLogout(){
    this.logout();
  };

  /*logout() {
    localStorage.removeItem('user');
    window.location.href = '/';
  };*/

  createCard(year, month, text) {
    const newCard = { year, month, text };
    const newCardArray = [...this.state.cards, newCard];
    const newState = {
      cards: newCardArray
    }
    this.setState(newState);
  };

  deleteCard(indexCard) {
    let arrayCards = this.state.cards;
    arrayCards.splice(indexCard, 1);
    this.setState({ cards: arrayCards });
    console.log("card deletado");
  };

  render() {

    return (
      <section>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand style={{"font-family": "GreatVibes","font-size": "30px"}} href="#">Via Manzoni</Navbar.Brand>
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

              <Button onClick={() => { this.handleLogout() }} variant="outline-warning">Sair</Button>

            </Navbar.Collapse>
          </Container>
        </Navbar>

        <CardRegistration createCard={this.createCard.bind(this)}></CardRegistration>
        <CardList deleteCard={this.deleteCard.bind(this)} cards={this.state.cards}></CardList>
      </section>
    );
  }
}


export default HomePage;