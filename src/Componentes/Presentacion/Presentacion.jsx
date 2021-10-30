import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Foto1 from '../../Img/foto2.jpg'

import './presentacion.css'
import Carta from './Carta.jsx'

function Presentacion() {
    return (
        <div>
            <div className="intro">
                <p>Soy desarrollador web <span className="front">Front-End</span> desde hace 1 año y sigo en constante aprendizaje </p>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <img className="card" src={Foto1} alt="foro-perfil"/>
                        </div>
                    </Col>
                    <Col>
                        <Row className="prueba">
                            <Col>
                            <h5>Mis Proyectos</h5>
                            </Col>
                            <Carta/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Presentacion
