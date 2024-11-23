import React from "react";

const InputDate = ({ label, description, identifier, required, defaultValue, onChange, readOnly, disabled }) => {
    return (
        <div className="container-input">
            <div className="input-header">
                <label htmlFor={identifier} className="input-label">{label}</label>
                <span className="descriptionInput">{description}</span>
            </div>
            <div className="input-content">
                <input
                    type="date"
                    id={identifier}
                    name={identifier}
                    required={required}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    readOnly={readOnly}
                    className="date-input-field"
                    disabled={disabled}
                />
            </div>
        </div>
    );
};

export default InputDate;