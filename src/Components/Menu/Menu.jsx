import { Button, Container, Nav,Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AiFillShopping } from 'react-icons/ai';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import logo from "../../assets/sin-fondo.png"

function Menu() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="Logo" className="w-25"/>
          Tagua y Semillas</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink} >Inicio</Nav.Link>
            <Nav.Link to="/about" as={NavLink}>Sobre Nosotros</Nav.Link>
            <Nav.Link to="/Catalogue" as={NavLink}>Catálogo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {cartQuantity > 0 && (<Button onClick={openCart} style={{width: "3rem", height: "3rem", position: "relative"}} variant="outline-primary" className="rounded-circle">
          <AiFillShopping size={28}/>
          <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{ 
            color: "white", 
            width: "1.5rem", 
            height: "1.5rem", 
            position: "absolute",
            bottom: 0,
            right: 0,
            transform: "translate(12%, 12%)"

            }}>{cartQuantity}
            </div>
        </Button>)}
      </Container>
    </Navbar>
  );
}

export default Menu;