import React from "react";

import './index.css'

const Button = ({text, opacity, width, type, onClick, disabled, ...rest}) => {
    
    return (
        <button
            className="custom-button"
            style={{width: width, opacity: opacity,}}
            type={type}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {text}
        </button>
    )
    
}

export default Button