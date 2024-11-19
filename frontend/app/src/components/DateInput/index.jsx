import React from "react";

const InputDate = ({ label, description, identifier, required, value, onChange, readOnly }) => {
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
                    value={value}
                    onChange={onChange}
                    readOnly={readOnly}
                    className="date-input-field"
                />
            </div>
        </div>
    );
};

export default InputDate;