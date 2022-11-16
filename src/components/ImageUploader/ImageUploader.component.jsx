import { useState } from 'react';
import ImageUploading from 'react-images-uploading';

import CloseIcon from '../../assets/icons/close.svg';
import { ContentImageUploader } from './ImageUploader.styles';

function ImageUploader({ onClickContinue }) {
    const [images, setImages] = useState([]);
    const maxNumber = 9;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    return (
        <ContentImageUploader>
            <h4 className="title t-center">Sube tus fotos aquí.</h4>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={['jpg', 'png', 'jpeg']}>
                {({ imageList, onImageUpload, onImageRemove, isDragging, dragProps }) => {
                    const { onDrop, onDragEnter, onDragLeave, onDragOver, onDragStart } = dragProps;
                    return (
                        <div className="image-uploader-wrapper">
                            <div
                                className="image-uploader"
                                style={isDragging ? { background: '#dedede' } : null}
                                onDrop={onDrop}
                                onDragEnter={onDragEnter}
                                onDragLeave={onDragLeave}
                                onDragOver={onDragOver}
                                onDragStart={onDragStart}>
                                <button
                                    onClick={onImageUpload}
                                    className="btn border"
                                    type="button">
                                    Subir foto
                                </button>
                                <button type="button" className="drag-here t-center d-block">
                                    O <br />
                                    arrastra y suelta acá
                                </button>
                            </div>

                            <div className="content-images-list d-flex gap-2 wrap">
                                {imageList.map((image, index) => (
                                    <div key={image.data_url} className="image-item">
                                        <img src={image.data_url} alt="" />
                                        <button
                                            type="button"
                                            className="remove-image f-12"
                                            onClick={() => onImageRemove(index)}>
                                            <img src={CloseIcon} alt="Close icon" />
                                        </button>
                                    </div>
                                ))}

                                {imageList.length ? (
                                    <button
                                        type="button"
                                        className="btn primary"
                                        onClick={onClickContinue}>
                                        Continuar
                                    </button>
                                ) : null}
                            </div>
                        </div>
                    );
                }}
            </ImageUploading>
        </ContentImageUploader>
    );
}

export default ImageUploader;
