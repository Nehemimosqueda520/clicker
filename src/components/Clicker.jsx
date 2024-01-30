import React from "react";
import "../css/Clicker.css"


export function Clicker ({ clickNumbers }) { 
    return (
        <div className="clicker">
            {clickNumbers}
        </div>
    )
}