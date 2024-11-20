import React from "react";
import './index.css';

const Dropdown = ({ label, description, identifier, required, data, disabled, defaultValue}) => {
    return (
    <div className="container-input">
      <div className="input-header">
        <label htmlFor={identifier} className="labelInput">{label}</label>
        <span className="descriptionInput">{description}</span>
      </div>
      <div className="input-content">
        <select 
          name={identifier} 
          id={identifier}
          required={required} 
          disabled={disabled}
          defaultValue={defaultValue} 
        >
          <option value="" hidden={true}>Selecione</option>
          {data.map(dt => (
            <option value={dt.value} key={dt.value}>
              {dt.description}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
