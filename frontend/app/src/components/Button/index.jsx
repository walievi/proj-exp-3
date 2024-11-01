import React from "react";

import './index.css'

const Button = ({text, opacity, width, type, onClick}) => {
    
    return (
        <button
            className="custom-button"
            style={{width: width, opacity: opacity,}}
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    )
    
}

export default Button