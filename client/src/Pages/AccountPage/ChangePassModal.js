import { Modal, Form, Alert, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
const ChangePassModal = ({isOpen, close}) => {
    const {register, handleSubmit, formState: { errors }} = useForm()


    const onSubmit = (formData) => {

    }
    return ( 
        <Modal show={true} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Change Password
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>New Password</Form.Label>
                        <Form.Control placeholder="Enter new password" {...register('password')}></Form.Control>
                        {errors?.password && (
                        <Form.Text>
                            <Alert variant='danger'>Invalid Password</Alert>
                        </Form.Text>
                   )}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={close}>Cancel</Button>
                <Button variant='outline-primary' onClick={handleSubmit(onSubmit)}>Update Password</Button>
            </Modal.Footer>
        </Modal>

     );
}
 
export default ChangePassModal;