import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../helpers/Routes";

const HomePage = () => {
    return ( 
        <Container>
            <Row className='mt-5'>
                <Col xs={{span: 12}} md={{span: 6}}>
                <h2>Wolcome to Tasks Administrator</h2>
                <p>
                    Here you can administrate your proyects
                </p>
                <p>
                    Mark your tasks, add, delete or update
                </p>
                <div>
                    <Link to={routes.login}>Log in</Link> or  
                    <Button as= {Link} to={routes.register} className="ml-1">Create Account</Button>
                </div>
                </Col>
                <Col>
                    <img 
                        className="img-fluid"
                        src="/img/task-manager.svg"
                        alt="tasks-administrator"
                    />
                </Col>
            </Row>
        </Container>
     );
}
 
export default HomePage;