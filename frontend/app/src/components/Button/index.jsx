import React from "react";

import './index.css'

const Button = ({text, opacity, width, type, onClickEvent}) => {
    
    return (
        <button
            className="custom-button"
            style={{width: width, opacity: opacity,}}
            type={type}
            onClick={onClickEvent}
        >
            {text}
        </button>
    )
    
}

export default Button