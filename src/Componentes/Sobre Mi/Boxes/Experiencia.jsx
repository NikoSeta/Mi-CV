import { Row, Col } from "react-bootstrap"
import "./boxes.css"

function Experiencia(){
    return(
        <div className="box">
            <Row>
                <Col>
                    <h3>EXPERIENCIA</h3>
                </Col>
            </Row>
                <Col>
                    <div className="experiencia">
                        <h5>Call Center | BroadBandTech | 6 de Noviembre 2018 – Actualidad</h5>
                        <Row>
                            <Col>
                                <p>-Help desk/chat/mail de reclamos técnicos.</p>
                                <p>-Seguimiento de reclamos técnicos y resolución de los mismos. </p>   
                                <p>-Soporte interno a las páginas Web de la empresa.  </p> 
                                <p>-Capacitación al nuevo personal de la empresa. </p>
                                <p>Dirección: Junín 1596 6to piso, CABA. </p>
                                <p>TEL: 11 6403-7291</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
        </div>
    )
}
export default Experiencia