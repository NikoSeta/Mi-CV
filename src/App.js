import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from "./Componentes/NavBar/NavBar";
import Presentacion from "./Componentes/Presentacion/Presentacion";
import SobreMi from './Componentes/Sobre Mi/SobreMi';
import Trabajos from './Componentes/Trabajos/Trabajos';
import Contacto from "./Componentes/Contacto/Contacto";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavBar/>
        <Switch>
          <Route exact path ='/' component = {Presentacion}/>
          <Route exact path ='/sobreMi' component = {SobreMi}/>
          <Route exact path ='/trabajo' component = {Trabajos}/>
          <Route exact path ='/contacto' component = {Contacto}/>
        </Switch>
    </Router>
  );
}
export default App;
