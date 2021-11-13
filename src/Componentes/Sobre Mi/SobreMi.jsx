import { Container, Col, Row } from "react-bootstrap"
import Experiencia from "./Boxes/Experiencia"
import Educacion from "./Boxes/Educacion"
import Hobbies from "./Boxes/Hobbies"
import './SobreMi.css'

function SobreMi() {
    return (
        <div>
            <Container className="bigBox">
                <Row>
                    <h5 className="frase">Enérgico, con ganas de seguir <span className="frase" id="fraseColor">aprendiendo</span>, autodidacta, curioso. </h5>
                    <Col lg="4">
                        <Experiencia/>
                    </Col>
                    <Col lg="4">
                        <Educacion/>
                    </Col>
                    <Col lg="4">
                        <Hobbies/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default SobreMi
