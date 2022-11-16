import { useState } from 'react';

export const useValidateFields = () => {
    const [validateError, setValidateError] = useState({
        name: {
            error: false,
            message: ''
        },
        lastName: {
            error: false,
            message: ''
        },
        email: {
            error: false,
            message: ''
        },
        phone: {
            error: false,
            message: ''
        },
        address: {
            error: false,
            message: ''
        }
    });

    const validateFields = (stateForm) => {
        const errors = { ...validateError };
        let error = false;

        const messageRequired = 'Este campo es requerido';
        const messageEmail = 'Coloca un correo electrónico valido';
        const messagePhone = 'Coloca un número telefónico valido';

        if (stateForm.name.length === 0) {
            errors.name.error = true;
            errors.name.message = messageRequired;
            error = true;
        } else {
            errors.name.error = false;
            errors.name.message = '';
            error = false;
        }
        if (stateForm.lastName.length === 0) {
            errors.lastName.error = true;
            errors.lastName.message = messageRequired;
            error = true;
        } else {
            errors.lastName.error = false;
            errors.lastName.message = '';
            error = false;
        }
        if (stateForm.email.length === 0) {
            errors.email.error = true;
            errors.email.message = messageRequired;
            error = true;
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(stateForm.email)) {
            errors.email.error = true;
            errors.email.message = messageEmail;
            error = true;
        } else {
            errors.email.error = false;
            errors.email.message = '';
            error = false;
        }
        if (stateForm.phone.length === 0) {
            errors.phone.error = true;
            errors.phone.message = messageRequired;
            error = true;
        } else if (!/^[+]{0,1}\d+\.?\d*$/.test(stateForm.phone)) {
            errors.phone.error = true;
            errors.phone.message = messagePhone;
            error = true;
        } else {
            errors.phone.error = false;
            errors.phone.message = '';
            error = false;
        }
        if (stateForm.address.length === 0) {
            errors.address.error = true;
            errors.address.message = messageRequired;
            error = true;
        } else {
            errors.address.error = false;
            errors.address.message = '';
            error = false;
        }

        setValidateError(errors);
        return error;
    };

    return [validateError, setValidateError, validateFields];
};
