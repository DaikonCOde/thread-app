import { createPortal } from 'react-dom';

import { ContentModal } from './Modal.styles';
import IconClose from '../../assets/icons/close.svg';

function ModalLayout({ children, onClose, show, scroll = false, iconClose = true }) {
    if (!show) {
        document.getElementById('root').classList.remove('no-scroll');
        return null;
    }
    if (scroll) {
        document.getElementById('root').classList.add('no-scroll');
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
