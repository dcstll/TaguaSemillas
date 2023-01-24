import { Button, Container, Nav,Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AiFillShopping } from 'react-icons/ai';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import logo from "../../assets/sin-fondo.png"
import style from "./Menu.module.css"

function Menu() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <Navbar expand="lg" className={style.nav}>
      <Container>
        <Navbar.Brand className={style.brand}>
          <div>
          <img src={logo} alt="Logo" className={style.imgLogo}/>
          </div>
          Tagua y Semillas</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={style.links}> 
          <Nav>
            <Nav.Link to="/" as={NavLink} className={style.link}>Inicio</Nav.Link>
            <Nav.Link to="/about" as={NavLink} className={style.link}>Sobre Nosotros</Nav.Link>
            <Nav.Link to="/Catalogue" as={NavLink} className={style.link}>Catálogo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button onClick={openCart} className={style.cartButton}>
          <AiFillShopping size={28}/>
          {cartQuantity > 0 && (<div className='rounded-circle bg-success d-flex justify-content-center align-items-center' style={{ 
            color: "white", 
            width: "1.5rem", 
            height: "1.5rem", 
            position: "absolute",
            bottom: 0,
            right: 0,
            transform: "translate(40%, 40%)"

            }}>{cartQuantity}
            </div>
            )}
        </button>
      </Container>
    </Navbar>
  );
}

export default Menu;