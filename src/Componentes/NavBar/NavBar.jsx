import BotonesNav from './botones'
import './CSS/NavBar.css'

function NavBar() {
    return (
      <>
          <h1 className="myName"> Hola, soy Nico ;) </h1>
          <h3 className="welcome">Bienvenido</h3>
            <BotonesNav/>
          </>
    );
}
  export default NavBar;