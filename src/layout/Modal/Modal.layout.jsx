import { createPortal } from 'react-dom';

import { ContentModal } from './Modal.styles';
import IconClose from '../../assets/icons/close.svg';

function ModalLayout({ children, onClose, show, iconClose = true }) {
    if (!show) {
        return null;
    }

    return createPortal(
        <ContentModal>
            <div className="content-modal">
                {iconClose && (
                    <button type="button" className="close-modal d-flex center" onClick={onClose}>
                        <img src={IconClose} alt="" />
                    </button>
                )}
                <div className="body">{children}</div>
            </div>

            <div className="overlay" />
        </ContentModal>,
        document.getElementById('modal')
    );
}

export default ModalLayout;
