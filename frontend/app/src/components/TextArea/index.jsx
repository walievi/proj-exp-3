import React from "react";

import './index.css';

const TextArea = ({ label, description, identifier, required, disabled, defaultValue }) => {
    return (
        <div className="container-input">
            <div className="input-header">
                <label htmlFor={identifier} className="labelInput">{label}</label>
                <span className="descriptionInput">{description}</span>
            </div>
            <div className="input-content">
                <textarea 
                    name={identifier} 
                    id={identifier}
                    defaultValue={defaultValue} 
                    required={required} 
                    disabled={disabled} // Passa o atributo disabled corretamente
                />
            </div>
        </div>
    );
};

export default TextArea;