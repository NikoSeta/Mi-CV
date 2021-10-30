import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HTML from '../../Img/HTML web.png'
import Java from '../../Img/JavaWeb.png'
import ReactJs from '../../Img/React web.png'
import NodeJs from '../../Img/NodeJs.jpg'
import { Container } from 'react-bootstrap'
function Carta() {
    return (
        <Container>
        <Row>
            <Col className="prueba">
                <div>
                    <p>HTML</p>
                    <img className="miniCard" src={HTML} alt="página"/>
                </div>
            </Col>
            <Col className="prueba">
                <div>
                    <p>Java Script</p>
                    <img className="miniCard" src={Java} alt="página"/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col className="prueba">
                <div>
                    <p>React JS</p>
                    <img className="miniCard" src={ReactJs} alt="página"/>
                </div>
            </Col>
            <Col className="prueba">
                    <div>
                        <p>Proximamente...</p>
                        <img className="miniCard" src={NodeJs} alt="página"/>
                    </div>
            </Col>
        </Row>
        </Container>
    )
}

export default Carta

