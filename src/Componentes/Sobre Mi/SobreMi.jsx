import { Container, Row, Col } from "react-bootstrap"
import './SobreMi.css'

function SobreMi() {
    return (
        <div>
            <Container>
                <h5 className="frase">Enérgico, con ganas de seguir <span className="frase" id="fraseColor">aprendiendo</span>, autodidacta, curioso. </h5>
                <Row>
                    <Row>
                        <Col>
                            <h3>E X P E R I E N C I A</h3>
                        </Col>
                    </Row>
                    <Col>
                        <div className="experiencia">
                            <h5>Call Center | BroadBandTech | 6 de Noviembre 2018 – Actualidad</h5>
                            <Row>
                                <Col sm="3"></Col>
                                    <Col>
                                        <p>-Help desk/chat/mail de reclamos técnicos.</p>
                                        <p>-Seguimiento de reclamos técnicos y resolución de los mismos. </p>
                                        <p>-Recepción de órdenes de venta de nuevos clientes.  </p> 
                                        <p>-Soporte interno a las páginas Web de la empresa.  </p> 
                                        <p>-Capacitación al nuevo personal de la empresa. </p>
                                        <p>Dirección: Junín 1596 6to piso, CABA. </p>
                                        <p>TEL: 11 6403-7291</p>
                                    </Col>
                                <Col sm="3"></Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <h3>E D U C A C I Ó N</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <h5>Secundario -</h5>
                    </Col>
                    <Col>
                        <p> Noviembre 2014 | Bachiller en Ciencias Sociales en el Instituto María Auxiliadora de San Isidro</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="4"><h5>Universitario -</h5></Col>
                    <Col>
                        <p>2015- 2017 | Estudiante de Arquitectura en la UBA.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="4"><h5>Terciario -</h5></Col>
                    <Col>
                        <p>Abril 2021 - actualmente en curso | Desarrollador Full Stack, en CoderHouse.</p>
                    </Col>
                </Row>
                <Row>
                    <Col><h3>H O B B I E S</h3></Col>
                        <Row>
                            <Col sm="3"></Col>
                            <Col >
                                <p>En mi tiempo libre me gusta realizar proyectos de Carpintería y Herrería, ya que desde siempre me gustó el trabajo manual.
                                    Tengo varios proyectos realizados, ya sean para familiares o amigos. Mi primera página en HTML fue realizada en base a mis
                                    trabajos a lo largo de los años.</p>
                            </Col>
                            <Col sm="3"></Col>
                        </Row>
                </Row>
            </Container>
        </div>
    )
}
export default SobreMi
