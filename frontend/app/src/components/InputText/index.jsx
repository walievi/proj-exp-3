import React from "react";

import './index.css'

const InputText = ({ label, description, identifier, required, placeholder }) => {
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
                    defaultValue=""
                    placeholder={placeholder}
                    required={required}
                />
            </div>
        </div>
    );
};

export default InputText