import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../helpers/Routes";

export default function NotFoundPage() {
    return (
        <Container>
            <Row className='mt-5'>
                <Col className="text-center">
                <img 
                    style= {{ width: '100%'}}
                    src="/img/404-not-found.svg"
                    alt="error-404"
                />
                <h2
                className="mt-4"
                >Click in <Link to={routes.home}>Return</Link></h2>
                </Col>
            </Row>
        </Container>
    )
}
