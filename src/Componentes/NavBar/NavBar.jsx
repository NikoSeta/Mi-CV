import BotonesNav from './botones'
import './CSS/NavBar.css'

function NavBar() {
    return (
      <>
          <h1 className="myName"> Hola, soy Nico ;) </h1>
          <h2 className="welcome">Bienvenido!</h2>
            <BotonesNav/>
          </>
    );
}
  export default NavBar;