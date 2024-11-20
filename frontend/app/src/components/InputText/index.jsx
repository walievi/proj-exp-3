import React from "react";

import './index.css'

const InputText = ({ label, description, identifier, required, placeholder, disabled, defaultValue }) => {
    return (
        <div className="container-input">
            <div className="input-header">
                <label htmlFor={identifier} className="labelInput">{label}</label>
                <span className="descriptionInput">{description}</span>
            </div>
            <div className="input-content">
                <input
                    type="text"
                    name={identifier}
                    id={identifier}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    required={required}
                    disabled={disabled}
                />
            </div>
        </div>
    );
};

export default InputText