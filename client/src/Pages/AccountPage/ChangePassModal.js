import { Modal, Alert, Button } from "react-bootstrap";
import useAuth from "../../auth/useAuth";
const DeleteModal = ({isOpen, close}) => {
    const { logout } = useAuth();
    const handleDelete = () => {
        //hacer peticion
        //close();
        logout();
    }
    return ( 
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Delete Account
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant='danger'>Sure  to delete account?</Alert>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={close}>Cancel</Button>
                <Button variant='outline-danger' onClick={handleDelete}>Delete</Button>
            </Modal.Footer>
        </Modal>

     );
}
 
export default DeleteModal;