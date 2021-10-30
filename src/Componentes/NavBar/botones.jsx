import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import './CSS/botones.css'

function BotonesNav() {
    return (
    <>
        <Nav className="justify-content-center">
              <NavLink to={`/`}><Button className="tamano" variant="warning" size="lg" >Home</Button></NavLink>
              <NavLink to={`/sobreMi`}><Button className="tamano" variant="warning" size="lg">Sobre Mi</Button></NavLink>
              <NavLink to={`/trabajos`}><Button className="tamano" variant="warning" size="lg">Trabajos</Button></NavLink>
              <NavLink to={`/contacto`}><Button className="tamano" variant="warning" size="lg">Contacto</Button></NavLink>     
        </Nav>
    </>
    );
  }
  export default BotonesNav;