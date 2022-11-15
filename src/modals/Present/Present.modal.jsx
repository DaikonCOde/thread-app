import { ModalLayout } from '../../layout/Modal';
import { ContentPreset } from './Present.styles';

function PresentModal({ show, onClose }) {
    return (
        <ModalLayout show={show} onClose={onClose} iconClose={false}>
            <ContentPreset>
                <h4 className="f-20 fw-7 t-center">Bienvenido</h4>
                <span className="f-14 d-block t-center">
                    Estas a punto de realizar el test para ...
                    <br />
                    <br />
                    algunas recomendaciones antes de empezar
                </span>

                <ul className="d-flex gap-2 column list-style-circle">
                    <li>
                        <span className="f-12 d-block">
                            Te recomendamos que completes todas las preguntas
                        </span>
                    </li>
                    <li>
                        <span className="f-12 d-block">
                            Te recomendamos que completes todas las preguntas
                        </span>
                    </li>
                    <li>
                        <span className="f-12 d-block">
                            Te recomendamos que completes todas las preguntas
                        </span>
                    </li>
                    <li>
                        <span className="f-12 d-block">
                            Te recomendamos que completes todas las preguntas
                        </span>
                    </li>
                </ul>

                <button type="button" className="btn primary" onClick={onClose}>
                    Iniciar test
                </button>
            </ContentPreset>
        </ModalLayout>
    );
}

export default PresentModal;
