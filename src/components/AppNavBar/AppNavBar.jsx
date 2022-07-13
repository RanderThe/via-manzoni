import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const AppNavBar = () => {

  const { logout } = useContext(AuthContext);

  const handleLogout = () => logout();

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand to="/" style={{ "fontFamily": "GreatVibes", "fontSize": "30px", color: 'inherit', textDecoration: 'none' }} href="/">
          Via Manzoni
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Nav.Link style={{ color: 'inherit', textDecoration: 'none' }} href="/receipts">
              Comprovantes
            </Nav.Link>

            <Nav.Link style={{ color: 'inherit', textDecoration: 'none' }} href="/charts">
              Gráficos
            </Nav.Link>

            <Nav.Link style={{ color: 'inherit', textDecoration: 'none' }} href="/reports">
              Relatórios
            </Nav.Link>

            <Nav.Link href="#" disabled>
              Votações(Em Construção)
            </Nav.Link>
            <Nav.Link href="#" disabled>
              Obras(Em Construção)
            </Nav.Link>
          </Nav>
          <Button onClick={() => { handleLogout() }} variant="outline-warning">Sair</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavBar;