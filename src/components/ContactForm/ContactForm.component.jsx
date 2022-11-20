// hooks
import { useState } from 'react';
// import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { useValidateFields } from '../../hooks/useValidateFields';
// firebase
import { firestore } from '../../db/firebase';
// components
import { CustomInput } from '../CustomInput';
import { Loader } from '../Loader';
import { HasImageUpload } from '../../modals/HasImageUpload';
import { Error } from '../../modals/Error';

import { ContentContactForm } from './ContactForm.styles';

function ContactForm() {
    const navigate = useNavigate();
    const [validateError, setValidateError, validateFields] = useValidateFields();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [uploadImage, setUploadImage] = useState(false);

    const [stateForm, setStateForm] = useState({
        gender: 'Mr',
        name: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        acceptTerms: false
    });

    const handleInputChange = (e) => {
        const { value } = e.target;
        const { name } = e.target;

        if (validateError[name].error) {
            setValidateError({ ...validateError, [name]: { error: false, message: '' } });
        }

        setStateForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const SaveDataUser = async () => {
        setIsLoading(true);

        try {
            // obtener las respuestas guardadas en local storage
            const parseAnswerUser = await JSON.parse(localStorage.getItem('answer_user'));
            // parsear data que se va a guardar
            const formData = {
                ...stateForm,
                reply_email: 'daikon.code@gmail.com',
                answers: {
                    ...parseAnswerUser
                },
                images: []
            };
            // crear referencia a la coleccion donde se debe de guardar
            const userRef = doc(firestore, 'users', stateForm.email);

            localStorage.setItem('key_user', stateForm.email);
            // setear data
            await setDoc(userRef, formData);

            // preguntar si quiere subir imagenes
            setUploadImage(true);
            // terminar carga
            setIsLoading(false);
        } catch (error) {
            setIsError(true);
            setIsLoading(false);
        }

        // emailjs
        //     .send(
        //         'recoveryourhair_147490',
        //         'template_zvcer2f',
        //         formData,
        //         'r8a2yZnD5hgKfn1da'
        //     )
        //     .then((response) => {
        //         console.log(response);
        //         setIsLoading(false);
        //         navigate('/gracias', { replace: true });
        //     })
        //     .catch((error) => console.log(error));
    };

    /*
        response: boolean
    */
    const handleUploadImage = (response) => {
        setUploadImage(false);
        // si response es true redirigir a upload-image para subir sus fotos
        if (response) {
            navigate('/upload-image');
        } else {
            // sino rediricgir a la pagina de gracias
            navigate('/tranks');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // validar errores
        const existErrors = validateFields(stateForm);
        if (existErrors) return;

        // si no hay errores ejectuar la función saveDataUser
        SaveDataUser();
    };

    return (
        <ContentContactForm>
            <h3 className="title t-center mb-3">Déjanos tus datos</h3>
            <form onSubmit={handleSubmit}>
                <div className="select-gender">
                    <label htmlFor="gender-mr">
                        <input
                            type="radio"
                            name="gender"
                            id="gender-mr"
                            checked={stateForm.gender === 'Mr'}
                            onChange={(e) =>
                                setStateForm((prev) => ({ ...prev, gender: e.target.value }))
                            }
                            value="Mr"
                        />
                        Mr.
                    </label>
                    <label htmlFor="gender-ms">
                        <input
                            type="radio"
                            name="gender"
                            id="gender-ms"
                            checked={stateForm.gender === 'Ms'}
                            onChange={(e) =>
                                setStateForm((prev) => ({ ...prev, gender: e.target.value }))
                            }
                            value="Ms"
                        />
                        Ms.
                    </label>
                </div>

                <CustomInput
                    name="name"
                    value={stateForm.name}
                    handleChange={handleInputChange}
                    validate={validateError}
                    placeholder="Nombres"
                    id="input-name"
                    label="Nombre"
                />
                <CustomInput
                    name="lastName"
                    value={stateForm.lastName}
                    handleChange={handleInputChange}
                    validate={validateError}
                    placeholder="Apellidos"
                    id="input-last-name"
                    label="Apellido"
                />
                <CustomInput
                    name="email"
                    value={stateForm.email}
                    handleChange={handleInputChange}
                    validate={validateError}
                    placeholder="Correo electrónico"
                    id="input-email"
                    label="Correo electrónico"
                />
                <CustomInput
                    name="phone"
                    value={stateForm.phone}
                    handleChange={handleInputChange}
                    validate={validateError}
                    placeholder="Número telefónico"
                    id="input-phone"
                    label="Número telefónico"
                />
                <CustomInput
                    name="address"
                    value={stateForm.address}
                    handleChange={handleInputChange}
                    validate={validateError}
                    placeholder="¿Cuál es tu localidad?"
                    id="input-address"
                    label="Localidad"
                />

                <div className="accept-terms f-12">
                    <label htmlFor="terms">
                        <input
                            type="checkbox"
                            name="terms"
                            id="terms"
                            onChange={() =>
                                setStateForm((prev) => ({
                                    ...prev,
                                    acceptTerms: !prev.acceptTerms
                                }))
                            }
                        />
                        Acepto los términos y condiciones
                    </label>
                    {validateError.terms.error && (
                        <span className="error-message d-block">
                            {validateError.terms.message}{' '}
                        </span>
                    )}
                </div>

                <button className="btn primary" type="submit">
                    Continuar
                </button>
            </form>
            <HasImageUpload
                show={uploadImage}
                onClose={() => setUploadImage(false)}
                handleResponse={handleUploadImage}
            />
            <Loader loading={isLoading} />
            <Error show={isError} onClose={() => setIsError(false)} />
        </ContentContactForm>
    );
}

export default ContactForm;
