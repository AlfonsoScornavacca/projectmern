import { useEffect } from "react";
import { Modal, Form, Alert, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../auth/useAuth";
import editAccountResolver from "../../validations/editAccountResolver";

const EditModal = ({isOpen, close, user}) => {
    const {register, handleSubmit, formState: { errors }, reset } = useForm({resolver: editAccountResolver})
    const {updateUser} = useAuth();

    const onSubmit = (formData) => {
        updateUser(formData)
        close()
    }

    useEffect(() => {
        if(!isOpen) {
            reset();
        }
    }, [isOpen, reset])

    useEffect(() => {
        reset({
            name: user.name,
            email: user.email
        })
    }, [user, reset])
    return ( 
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Edit Account
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter new Name" {...register('name')}></Form.Control>
                        {errors?.name && (
                        <Form.Text>
                            <Alert variant='danger'>{errors.name.message}</Alert>
                        </Form.Text>
                   )}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter new Email" {...register('email')}></Form.Control>
                        {errors?.email && (
                        <Form.Text>
                            <Alert variant='danger'>{errors.email.message}</Alert>
                        </Form.Text>
                   )}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={close}>Cancel</Button>
                <Button variant='outline-primary' onClick={handleSubmit(onSubmit)}>Update Account</Button>
            </Modal.Footer>
        </Modal>

     );
}
 
export default EditModal;