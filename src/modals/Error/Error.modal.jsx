import { ModalLayout } from '../../layout/Modal';
import { ContentError } from './Error.styles';

import ErrorIcon from '../../assets/icons/error.svg';

function Error({ show, onClose }) {
    return (
        <ModalLayout show={show} onClose={onClose}>
            <ContentError>
                <img src={ErrorIcon} alt="error icon" className="d-block" />
                <h4 className="title t-center">Ocurrio un error, intentalo de nuevo</h4>
            </ContentError>
        </ModalLayout>
    );
}

export default Error;
