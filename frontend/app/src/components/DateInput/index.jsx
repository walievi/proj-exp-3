import React from "react";

const InputDate = ({ label, description, identifier, required }) => {
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
                    className="date-input-field"
                />
            </div>
        </div>
    );
};

export default InputDate;