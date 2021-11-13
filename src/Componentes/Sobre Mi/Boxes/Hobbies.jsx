import { Row, Col } from "react-bootstrap"
import "./boxes.css"

function Hobbies(){
    return(
        <div className="box">
        <Col>
            <h3>HOBBIES</h3>
        </Col>
            <Row>
                <Col >
                    <p>En mi tiempo libre me gusta realizar proyectos de Carpintería y Herrería, ya que desde siempre me gustó el trabajo manual.
                    <br/>Tengo varios proyectos realizados, ya sean para familiares o amigos. Mi primera página en HTML fue construida en base a mis
                    trabajos realizados a lo largo de los años, con el fin de aprender programacion web y promocionar mi trbajo.</p>
                </Col>
            </Row>
        </div>
    )
}

export default Hobbies