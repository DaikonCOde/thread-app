import { ContentCustomInput } from './CustomInput.styles';

function InputText({ name, label, value, handleChange, validate, placeholder, id }) {
    return (
        <ContentCustomInput>
            <label htmlFor={id}>
                {label}
                <input
                    className="input-text"
                    type="text"
                    id={id}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={handleChange}
                />
            </label>
            {validate[name].error && (
                <span className="error-message">{validate[name].message} </span>
            )}
        </ContentCustomInput>
    );
}

export default InputText;
