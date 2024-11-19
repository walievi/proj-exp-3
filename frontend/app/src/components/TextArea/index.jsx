import React from "react";

import './index.css'

const TextArea = ({label, description, identifier, required}) => {

    return (
        <div className="container-input">
            <div className="input-header">
                <label htmlFor={identifier} className="labelInput">{label}</label>
                <span className="descriptionInput">{description}</span>
            </div>
            <div className="input-content">
                {
                    required === true ?
                        <textarea type="text" name={identifier} id={identifier} required />
                    :
                        <textarea type="text" name={identifier} id={identifier} />
                }
            </div>
        </div>
    )
}

export default TextArea