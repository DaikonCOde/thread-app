/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
// import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { CustomInput } from '../CustomInput';
import { Loader } from '../Loader';

import { useValidateFields } from '../../hooks/useValidateFields';

import { ContentContactForm } from './ContactForm.styles';

function ContactForm({ answer }) {
    const navigate = useNavigate();

    const [validateError, setValidateError, validateFields] = useValidateFields();
    const [isLoading, setIsLoading] = useState(false);
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const existErrors = validateFields(stateForm);

        if (existErrors) return;
        setIsLoading(true);

        const formData = {
            ...stateForm,
            reply_email: import.meta.env.VITE_EMAIL_USER,
            answers: {
                ...answer
            }
        };

        console.log(formData);
        navigate('/clinics');

        // emailjs
        //     .send('recoveryourhair_147490', 'template_zvcer2f', formData, 'r8a2yZnD5hgKfn1da')
        //     .then((response) => {
        //         setIsLoading(false);
        //         navigate('/gracias', { replace: true });
        //     })
        //     .catch((error) => console.log(error));
    };

    return (
        <ContentContactForm>
            <h3 className="title t-center mb-3">
                Encontramos 3 clínicas para ti.
                <br />
                Para verlas déjanos tus datos
            </h3>
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
                    name="address"
                    value={stateForm.address}
                    handleChange={handleInputChange}
                    validate={validateError}
                    placeholder="¿Cuál es tu localidad?"
                    id="input-address"
                    label="Dirección"
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

                <button className="btn primary" type="submit">
                    Continuar
                </button>
            </form>
            {isLoading && <Loader />}
        </ContentContactForm>
    );
}

export default ContactForm;
