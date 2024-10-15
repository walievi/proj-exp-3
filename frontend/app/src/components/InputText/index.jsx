import React from "react";

import './index.css'

const InputText = ({label, description, identifier, required}) => {

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
                        <input type="text" name={identifier} id={identifier} defaultValue="" required />
                    :
                        <input type="text" name={identifier} id={identifier} defaultValue="" />
                }
            </div>
        </div>
    )
}

export default InputText