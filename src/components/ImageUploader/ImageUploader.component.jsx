// hooks
import { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { useNavigate, Navigate } from 'react-router-dom';
// firebase
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import { storage, firestore } from '../../db/firebase';
// componets
import { Loader } from '../Loader';
import { Error } from '../../modals/Error';
// assets
import CloseIcon from '../../assets/icons/close.svg';
import { ContentImageUploader } from './ImageUploader.styles';

function ImageUploader() {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const maxNumber = 9;
    const onChangeImageUploader = (imageList) => {
        // data for submit
        setImages(imageList);
    };

    const uploadImageToStorage = async () => {
        setIsLoading(true);

        const arrayWithImageUrls = [];

        Promise.all(
            images.map(async ({ file }) => {
                const imageRef = ref(storage, `pacients/${file.name}`);
                await uploadBytesResumable(imageRef, file)
                    .then(async (snapshot) => {
                        // Let's get a download URL for the file.
                        await getDownloadURL(snapshot.ref).then((url) => {
                            arrayWithImageUrls.push(url);
                            // ...
                        });
                    })
                    .catch(() => {
                        setIsError(true);
                    });
            })
        ).then(async () => {
            const KEY_USER = localStorage.getItem('key_user');

            if (!KEY_USER) return;

            const refUser = doc(firestore, 'users', KEY_USER);
            await updateDoc(refUser, { images: arrayWithImageUrls });

            setIsLoading(false);
            localStorage.clear();
            navigate('/thanks');
        });
    };

    if (!localStorage.getItem('key_user')) {
        return <Navigate to="/" />;
    }

    return (
        <ContentImageUploader>
            <h4 className="title t-center t-white">Sube tus fotos aquí.</h4>
            <ImageUploading
                multiple
                value={images}
                onChange={onChangeImageUploader}
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
                                        onClick={uploadImageToStorage}>
                                        Subir fotos
                                    </button>
                                ) : null}
                            </div>
                        </div>
                    );
                }}
            </ImageUploading>
            <Loader loading={isLoading} />
            <Error show={isError} onClose={() => setIsError(false)} />
        </ContentImageUploader>
    );
}

export default ImageUploader;
