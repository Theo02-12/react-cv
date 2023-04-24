import React from "react";
import './Parcours.css'
import Dev from "./Dev-web/Dev-web";

const Parcours = () => {
    return(
        <div className="mon-parcours" id="parcours">
            <div className="parcours-content">
                <h2 className="title-parcours">Parcours</h2>
                <Dev />
            </div>
        </div>
    )
};

export default Parcours;