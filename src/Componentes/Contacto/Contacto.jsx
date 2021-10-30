import Button from '@restart/ui/esm/Button'
import Form from 'react-bootstrap/Form'
import './contacto.css'

function Contacto() {
    return (
        <div className="type">
            <Form className="container">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text"/>
                    <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text"/>
                    <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Escriba aqui..</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button className="btn-warning btn-send" variant="primary" size="lg">Enviar</Button>
                </div>
            </Form>
        </div>
    )
}
export default Contacto
