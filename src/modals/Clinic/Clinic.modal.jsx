import { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { ModalLayout } from '../../layout';

import { ContentClinic } from './Clinic.styles';

function Clinic({ show, onClose, scroll, askForRating }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const imagesList = [
        '/clinics/logo.png',
        '/clinics/logo.png',
        '/clinics/logo.png',
        '/clinics/logo.png',
        '/clinics/logo.png'
    ];

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <ModalLayout show={show} scroll={scroll} onClose={onClose}>
            <ContentClinic>
                <div className="header d-flex between">
                    <div className="content-logo">
                        <img src="/clinics/flag.svg" className="flag" alt="flag" />
                        <img src="/clinics/logo.png" className="logo" alt="brand clinic" />
                    </div>
                    <h4 className="title t-center">Medical Hair</h4>
                </div>
                <p className="description t-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut incidunt
                    impedit corrupti voluptate cum, sint deleniti, officia aspernatur, omnis earum
                    laborum obcaecati ad voluptas?
                </p>

                <h5 className="f-16 fw-7 t-center my-3">Caracteristicas</h5>

                <div className="features d-flex center">
                    <div className="feature">
                        <h5 className="f-12 fw-5 t-center">Foliculos</h5>
                        <div className="content d-flex center column gap-1">
                            <img src="/clinics/logo.png" alt="" />
                            <span className="value d-block f-14 fw-7 t-center">256</span>
                        </div>
                    </div>
                    <div className="feature">
                        <h5 className="f-12 fw-5 t-center">Foliculos</h5>
                        <div className="content d-flex center column gap-1">
                            <img src="/clinics/logo.png" alt="" />
                            <span className="value d-block f-14 fw-7 t-center">256</span>
                        </div>
                    </div>
                </div>

                <h5 className="f-16 fw-7 t-center my-3">Galería</h5>

                <div className="gallery d-flex wrap">
                    {imagesList.map((src, index) => (
                        <button
                            key={src}
                            type="button"
                            className="image-item"
                            onClick={() => openImageViewer(index)}>
                            <img src={src} alt="" />
                        </button>
                    ))}

                    {isViewerOpen && (
                        <ImageViewer
                            src={imagesList}
                            currentIndex={currentImage}
                            disableScroll={false}
                            closeOnClickOutside
                            onClose={closeImageViewer}
                        />
                    )}
                </div>

                <button type="button" className="btn primary" onClick={askForRating}>
                    Pedir valoración
                </button>
            </ContentClinic>
        </ModalLayout>
    );
}

export default Clinic;
