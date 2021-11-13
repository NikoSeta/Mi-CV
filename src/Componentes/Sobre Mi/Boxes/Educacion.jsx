import {Row, Col } from "react-bootstrap"
import "./boxes.css"

function Educacion(){
    return(
        <div className="box">
            <Row>
                <Col>
                    <h3>EDUCACIÓN</h3>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <h5>Secundario</h5>
                </Col>
                <Col>
                    <p> Noviembre 2014 | Bachiller en Ciencias Sociales en el Instituto María Auxiliadora de San Isidro</p>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <h5>Universitario</h5>
                </Col>
                <Col>
                    <p>2015- 2017 | Estudiante de Arquitectura en la UBA.</p>
                </Col>
            </Row>                
            <Row>
                <Col md="6"><h5>Terciario</h5></Col>
                <Col>
                    <p>Abril 2021 - actualmente en curso | Desarrollador Full Stack, en CoderHouse.</p>
                </Col>
            </Row>
        </div>
    )
}

export default Educacion