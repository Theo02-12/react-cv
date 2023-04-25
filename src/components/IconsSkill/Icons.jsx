import React from "react";
import './Icons.css';

const Icons = () => {
    return(
    <div className="icons-skill">
        <span>
            <i className="fa-solid fa-code"></i>
            <h3>front-end</h3>
        </span>
        <span>
            <i className="fa-solid fa-server"></i>
            <h3>back-end</h3>
        </span>
        <span>
            <i className="fa-solid fa-mobile-screen-button"></i>
            <h3>responsive</h3>
        </span>
        <span>
            <i className="fa-solid fa-pen"></i>
            <h3>maquettage</h3>
        </span>
    </div>
    )
}
export default Icons