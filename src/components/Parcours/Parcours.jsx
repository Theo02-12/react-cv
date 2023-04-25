import React from "react";
import './Parcours.css'
import Dev from "./Dev-web/Dev-web";
import Sas from "./Sas-simplon/Sas-simplon";
import Signature from "./Signature/Signature";
import Sos from "./Stage-sos/Sos-depan";

const Parcours = () => {
    return(
        <div className="mon-parcours" id="parcours">
            <div className="parcours-content">
                <h2 className="title-parcours">Parcours</h2>
                <Dev />
                <Sas />
                <Signature />
                <Sos />
            </div>
        </div>
    )
};

export default Parcours;