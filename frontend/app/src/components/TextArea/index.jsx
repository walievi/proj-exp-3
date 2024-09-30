import React from "react";

import './index.css'

const TextArea = ({label, description, identifier, required}) => {

    return (
        <div className="container-input">
            <div className="input-header">
                <div className="labelInput">
                    <label htmlFor={identifier}>{label}</label>
                </div>
                <div className="descriptionInput">
                    <span>{description}</span>
                </div>
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