import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import useAuth from '../../auth/useAuth';
import DeleteModal from './DeleteModal';
import ChangePassModal from './ChangePassModal';
import useModal from '../../hooks/useModal';
import EditModal from './EditModal';
import ProfilePicModal from './ProfilePicModal';

export default function AccountPage() {
    //const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
   // const openDeleteModal = () => { setIsOpenDeleteModal(true)}
   // const closeDeleteModal = () => { setIsOpenDeleteModal(false)}

   // const [isOpenChangePassModal, setIsOpenChangePassModal] = useState(false);
   // const openChangePassModal = () => { setIsOpenChangePassModal(true)}
   // const closeChangePassModal = () => { setIsOpenChangePassModal(false)}

    const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = useModal();
    const [isOpenChangePassModal, openChangePassModal, closeChangePassModal] = useModal();
    const [isOpenEditModal, openEditModal, closeEditModal] = useModal();
    const [isOpenProfilePicModal, openProfilePicModal, closeProfilePicModal] = useModal();

    const { user } = useAuth();
    return (
        <>
        <Container>
            <Row className= 'mt-4'>
                <Col xs={12} className='text-center'>
                <img 
                    onClick={openProfilePicModal}
                    src='/img/male_avatar.svg'
                    alt='profile'
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        cursor: 'pointer'
                    }}
                />
                </Col>
                <Col>
                <Card style={{maxWidth: '360px'}} className= 'mt-3 mx-auto p-4'>
                    <p className= 'text-center'><b>Name: </b>{user.name}</p>
                    <p className= 'text-center'><b>Email: </b>{user.email}</p>
                    <Button variant='warning' onClick={openEditModal}>Edit Account</Button>
                    <Button variant= 'link' className='mt-1' onClick={openChangePassModal}>Change Password</Button>
                    <Button variant='link' className='mt-3 text-danger' onClick={openDeleteModal}>Delete Account</Button>
                </Card>
                </Col>
            </Row>
        </Container>
        <DeleteModal 
            isOpen={isOpenDeleteModal}
            close={closeDeleteModal}
        />
        <ChangePassModal 
            isOpen={isOpenChangePassModal}
            close={closeChangePassModal}
        />
        <EditModal 
            isOpen={isOpenEditModal}
            close={closeEditModal}
            user={user}
        />
               <ProfilePicModal 
            isOpen={isOpenProfilePicModal}
            close={closeProfilePicModal}
            user={user}
        />
        </>

    )
}
