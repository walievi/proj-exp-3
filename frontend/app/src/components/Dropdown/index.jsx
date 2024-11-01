import React from "react";

import './index.css'

const Dropdown = ({label, description, identifier, required, data}) => {

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
                        <select name={identifier} id={identifier}>
                            <option value="">Selecione</option>
                            { 
                                data.map(dt => (
                                    <option value={dt.value} key={dt.value}>{dt.description}</option>
                                ))
                            }
                        </select>
                    :
                        <select name={identifier} id={identifier} required>
                            { 
                                data.map(dt => (
                                    <option value={dt.value} key={dt.value}>{dt.description}</option>
                                ))
                            }
                        </select>
                }
            </div>
        </div>
    )
}

export default Dropdown