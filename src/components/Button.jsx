import React from "react";
import "../css/Button.css";


export function Button ({text, isClickButton, click}) {
    return(
        <button className={ isClickButton ? "click-button" : "restart-button" }
        onClick={click}>
            {text}
        </button>
    )
}