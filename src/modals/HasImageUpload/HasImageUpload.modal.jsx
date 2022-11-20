import { ModalLayout } from '../../layout/Modal';
import { ContentHasImageUpload } from './HasImageUpload.styles';

function HasImageUpload({ show, onClose, handleResponse }) {
    return (
        <ModalLayout show={show} onClose={onClose} iconClose={false}>
            <ContentHasImageUpload>
                <h4 className="title t-center">¿Tienes fotos para subir?</h4>

                <div className="content-options d-flex">
                    <button
                        type="button"
                        className="btn border"
                        onClick={() => handleResponse(false)}>
                        No
                    </button>
                    <button
                        type="button"
                        className="btn primary"
                        onClick={() => handleResponse(true)}>
                        Si
                    </button>
                </div>
            </ContentHasImageUpload>
        </ModalLayout>
    );
}

export default HasImageUpload;
