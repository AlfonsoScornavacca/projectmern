import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import useAuth from "../../auth/useAuth";
const ProfilePicModal = ({isOpen, close}) => {
    //const { logout } = useAuth();
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (e) => {
        const [file] = e.target.file;
        

        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedFile(reader.result)
        }
        reader.readAsDataURL(file)
    }
    return ( 
        <Modal show={true} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Change Profile Pic
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <input type='file' accept="image/*" onChange={handleFileChange}></input>
                    <img src={selectedFile} alt="image preview" className="img-fluid" />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={close}>Cancel</Button>
                <Button variant='outline-primary'>Update</Button>
            </Modal.Footer>
        </Modal>

     );
}
 
export default ProfilePicModal;