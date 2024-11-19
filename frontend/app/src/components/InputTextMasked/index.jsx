import InputMask from "react-input-mask";

import './index.css';

const InputTextMasked = ({ label, description, identifier, mask, placeholder, required, pattern, title }) => {
    return (
        <div className="container-input">
            <div className="input-header">
                <label htmlFor={identifier} className="labelInput">{label}</label>
                <span className="descriptionInput">{description}</span>
            </div>
            <div className="input-content">
                <InputMask
                    id={identifier}
                    name={identifier}
                    mask={mask}
                    placeholder={placeholder}
                    required={required}
                    pattern={pattern}
                    title={title}
                >
                    {(inputProps) => <input {...inputProps} type="text" />}
                </InputMask>
            </div>
        </div>
    );
};

export default InputTextMasked;
