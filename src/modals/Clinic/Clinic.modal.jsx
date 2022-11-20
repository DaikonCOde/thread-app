import { ModalLayout } from '../../layout';

function Clinic({ show, onClose }) {
    return (
        <ModalLayout show={show} onClose={onClose}>
            <h4>Cinics Info</h4>
        </ModalLayout>
    );
}

export default Clinic;
